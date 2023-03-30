import { createContext, useEffect, useState, ReactNode } from 'react';
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

interface TransactionInputProps {
  title: string;
  type: string;
  category: string;
  amount: number
}

interface TransactionsContextData {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInputProps) =>  Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get("transactions")
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
    </TransactionsContext.Provider>
  );
}