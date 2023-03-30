import { useContext } from "react";

import IncomeImg from "../../assets/entradas.svg";

import OutcomeImg from "../../assets/saidas.svg";

import TotalImg from "../../assets/total.svg";

import { TransactionsContext } from "../../context/TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  // const totalDeposits = transactions.reduce(( acc, transaction ) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0)

  const sumarry = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={IncomeImg} alt="Entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumarry.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>

          <img src={OutcomeImg} alt="Saídas" />
        </header>

        <strong>
          - 
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumarry.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={TotalImg} alt="Total" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumarry.total)}
        </strong>
      </div>
    </Container>
  );
}
