import { useState, useEffect } from 'react';
import { supabase, Investment, Operation } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useInvestments = () => {
  const { user } = useAuth();
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [operations, setOperations] = useState<Operation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchInvestments();
      fetchOperations();
    } else {
      setInvestments([]);
      setOperations([]);
      setLoading(false);
    }
  }, [user]);

  const fetchInvestments = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('investments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching investments:', error);
      } else {
        setInvestments(data || []);
      }
    } catch (error) {
      console.error('Error fetching investments:', error);
    }
  };

  const fetchOperations = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('operations')
        .select(`
          *,
          investments!inner(user_id)
        `)
        .eq('investments.user_id', user.id)
        .order('executed_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching operations:', error);
      } else {
        setOperations(data || []);
      }
    } catch (error) {
      console.error('Error fetching operations:', error);
    } finally {
      setLoading(false);
    }
  };

  const createInvestment = async (amount: number, riskLevel: 'low' | 'medium' | 'high') => {
    if (!user) return { error: new Error('No user logged in') };

    const { data, error } = await supabase
      .from('investments')
      .insert({
        user_id: user.id,
        amount,
        risk_level: riskLevel,
        daily_return: 0,
        total_return: 0,
        status: 'active',
      })
      .select()
      .single();

    if (!error && data) {
      setInvestments(prev => [data, ...prev]);
    }

    return { data, error };
  };

  const updateInvestment = async (id: string, updates: Partial<Investment>) => {
    const { data, error } = await supabase
      .from('investments')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (!error && data) {
      setInvestments(prev => 
        prev.map(inv => inv.id === id ? data : inv)
      );
    }

    return { data, error };
  };

  const getTotalBalance = () => {
    return investments.reduce((total, inv) => total + inv.amount + inv.total_return, 0);
  };

  const getTotalProfit = () => {
    return investments.reduce((total, inv) => total + inv.total_return, 0);
  };

  const getActiveInvestments = () => {
    return investments.filter(inv => inv.status === 'active');
  };

  return {
    investments,
    operations,
    loading,
    createInvestment,
    updateInvestment,
    fetchInvestments,
    fetchOperations,
    getTotalBalance,
    getTotalProfit,
    getActiveInvestments,
  };
};