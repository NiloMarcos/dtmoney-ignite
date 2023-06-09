import { Container, Content } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps ) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo DT Money" />

        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  );
}