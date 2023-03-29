import { useContext } from 'react';
 
import IncomeImg from '../../assets/entradas.svg';

import OutcomeImg from '../../assets/saidas.svg';

import TotalImg from '../../assets/total.svg';

import { TransactionsContext } from '../../context/TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log('Summary Component', transactions);


  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={IncomeImg} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>

          <img src={OutcomeImg} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>

          <img src={TotalImg} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}