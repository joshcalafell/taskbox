import './index.css'
import store from './lib/store'

import { Provider } from 'react-redux'
import InboxScreen from './components/InboxScreen'

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
      <h4>Demo<</h4>
    </Provider>
  )
}
export default App
