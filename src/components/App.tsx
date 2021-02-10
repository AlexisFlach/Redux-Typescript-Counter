import React from 'react'
import "../App.css"

import {Provider} from 'react-redux'
import store from '../state/store'
import SiteRouter from './SiteRouter'

const App = () => {
  return (
    <Provider store={store}>
      <SiteRouter />
    </Provider>
  )
}

export default App
