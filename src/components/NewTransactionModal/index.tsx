import { FormEvent, useState } from "react";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import Modal from "react-modal";

import CloseImg from "../../assets/fechar.svg";

import incomeImg from "../../assets/entradas.svg";

import outcomeImg from "../../assets/saidas.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransectionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()

    await createTransaction({
      title,
      category,
      amount,
      type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit')
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Titulo" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img 
              src={incomeImg} 
              alt="Entrada"
            />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria" 
          value={category}
          onChange={(event) => setCategory(event.target.value)}  
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
