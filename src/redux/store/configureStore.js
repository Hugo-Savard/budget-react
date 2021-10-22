
import { createStore, combineReducers} from 'redux'
import reducer from '../reducers/entries.reducers'

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: reducer,
    })
  )
}
export default configureStore
