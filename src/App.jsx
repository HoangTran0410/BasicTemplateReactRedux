import React from 'react'
import { Provider } from 'react-redux'

import './assets/css/bootstrap-grid.css'
import 'antd/dist/antd.css'
import Routes from './Routes'
import store from './redux/store'
import { GlobalLoading } from './components/GlobalLoading'

function App() {
    return (
        <Provider store={store}>
            <GlobalLoading ref={(gl) => (global.Loading = gl)}>
                <Routes />
            </GlobalLoading>
        </Provider>
    )
}

export default App

// gia su ong code them chuc nang o day
// code them
// code nua
// code toi khi xong chuc nang
