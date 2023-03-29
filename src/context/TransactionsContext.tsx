import { Children, createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  createdAt: string;
  amount: number;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsProps[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get("transactions")
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
        {children}
    </TransactionsContext.Provider>
  );
}