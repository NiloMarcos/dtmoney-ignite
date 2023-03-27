
import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';

import CloseImg from '../../assets/fechar.svg';

import incomeImg from '../../assets/entradas.svg';

import outcomeImg from '../../assets/saidas.svg';

interface NewTransectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransectionModalProps ) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
          type='button' 
          onClick={onRequestClose} 
          className="react-modal-close"
        >
          <img src={CloseImg} alt="Fechar modal" />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>

          <form >
            <input 
              type="text" 
              placeholder='Titulo'
              
            />
            
            <input 
              type="number" 
              placeholder='Valor'

            />

            <TransactionTypeContainer>
              <button
                type='button'
              > 
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
              </button>

              <button
                type='button'
              > 
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </button>
            </TransactionTypeContainer>

            <input 
              type="text" 
              placeholder='Categoria'
            />

            <button type="submit">
              Cadastrar
            </button>
          </form>
        </Container>
    </Modal>
  );
}