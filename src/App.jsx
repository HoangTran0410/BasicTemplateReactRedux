import React from 'react'
import { Provider } from 'react-redux'

import './assets/css/bootstrap-grid.css'
import 'antd/dist/antd.css'
import Routes from './Routes'
import store from './redux/store'
import { GlobalLoading } from './components/GlobalLoading'
import { GlobalModal } from './components/GlobalModal'

function App() {
    return (
        <Provider store={store}>
            <GlobalLoading ref={(gl) => (global.Loading = gl)}>
                <Routes />
                <GlobalModal ref={(gm) => (global.Modal = gm)} />
            </GlobalLoading>
        </Provider>
    )
}

export default App
