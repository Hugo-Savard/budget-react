import { Container } from 'semantic-ui-react';

import MainHeader from './components/MaiHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine';

import './App.css';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance
        label='Your Balance:'
        value='2,550.53'
        color='black'
        size='small'
      />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />

      <EntryLine
        isExpense={true}
        label={'Something'}
        value={'$10,00'}
      />
      <EntryLine
        isExpense={false}
        label={'Something else'}
        value={'$100,00'}
      />
      <EntryLine
        isExpense={true}
        label={'Something'}
        value={'$20,00'}
      />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
