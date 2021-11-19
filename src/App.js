import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from 'semantic-ui-react'

import MainHeader from './components/MaiHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'

import { getAllEntries } from './redux/actions/entries.actions'

import './App.css';

function App() {
  const [totalIncomes, setTotalIncomes] = useState(0)
  const [totalExpenses, settotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const entries = useSelector(state => state.entries)
  const { isOpen, id}  = useSelector(state => state.modals)

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      }
      return totalIncomes += Number(entry.value)
    })

    settotalExpense(totalExpenses)
    setTotalIncomes(totalIncomes)
    setTotal(totalIncomes - totalExpenses)
  }, [entries])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllEntries())
  }, [dispatch])

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance
        label='Your Balance:'
        value={total}
        color='black'
        size='small'
      />
      <DisplayBalances totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}
export default App
