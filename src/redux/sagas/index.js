//import * as testSaga from './testSaga'
import * as entriesSaga from './entries.sagas'
import * as entriesSagaDeletion from './entriesDeletion.sagas'
import * as entrieSagaAdd from './entriesAdd.sagas'

export function initSagas(sagaMiddleware) {
  //Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entrieSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}