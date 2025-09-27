import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

// Types
export interface Investment {
  id: string;
  user_id: string;
  amount: number;
  risk_level: 'low' | 'medium' | 'high';
  daily_return: number;
  total_return: number;
  status: 'active' | 'paused' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface Operation {
  id: string;
  investment_id: string;
  operation_type: 'buy' | 'sell';
  stock_symbol: string;
  quantity: number;
  price: number;
  result: number;
  executed_at: string;
}

export const useInvestments = () => {
  const { user } = useAuth();
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [operations, setOperations] = useState<Operation[]>([]);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data
    const mockInvestments: Investment[] = [
      {
        id: '1',
        user_id: user.id,
        amount: 1000,
        risk_level: 'medium',
        daily_return: 16,
        total_return: 150,
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];
    
    setInvestments(mockInvestments);
    setLoading(false);
  };

  const fetchOperations = async () => {
    if (!user) return;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data
    const mockOperations: Operation[] = [
      {
        id: '1',
        investment_id: '1',
        operation_type: 'buy',
        stock_symbol: 'PETR4',
        quantity: 100,
        price: 25.50,
        result: 150.00,
        executed_at: new Date().toISOString()
      },
      {
        id: '2',
        investment_id: '1',
        operation_type: 'sell',
        stock_symbol: 'VALE3',
        quantity: 50,
        price: 45.20,
        result: -25.00,
        executed_at: new Date(Date.now() - 3600000).toISOString()
      }
    ];
    
    setOperations(mockOperations);
  };

  const createInvestment = async (amount: number, riskLevel: 'low' | 'medium' | 'high') => {
    if (!user) return { error: new Error('No user logged in') };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newInvestment: Investment = {
      id: Date.now().toString(),
      user_id: user.id,
      amount,
      risk_level: riskLevel,
      daily_return: 0,
      total_return: 0,
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    setInvestments(prev => [newInvestment, ...prev]);

    return { data: newInvestment, error: null };
  };

  const updateInvestment = async (id: string, updates: Partial<Investment>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const updatedInvestment = investments.find(inv => inv.id === id);
    if (!updatedInvestment) return { data: null, error: new Error('Investment not found') };

    const updated = { ...updatedInvestment, ...updates };
    setInvestments(prev => 
      prev.map(inv => inv.id === id ? updated : inv)
    );

    return { data: updated, error: null };
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