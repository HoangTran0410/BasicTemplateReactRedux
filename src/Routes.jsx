import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AdminLayout from './layouts/AdminLayout'
import {
    LoginPage,
    TourProgramPage,
    UnderConstructionPage,
    NotFoundPage,
    DashBoardPage,
    TourProgramDetailPage,
    TourTypePage,
    PlacePage,
} from './pages'

export default function Routes() {
    const isLogin = true
    if (!isLogin) {
        return (
            <div className="bootstrap-wrapper">
                <Router>
                    <Switch>
                        <Route exact path="/" render={LoginPage} />
                        <Route path="*" render={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        )
    } else {
        return (
            <div className="bootstrap-wrapper">
                <Router>
                    <AdminLayout>
                        <Switch>
                            <Route
                                path="/admin/tourprogram"
                                exact
                                component={TourProgramPage}
                            />
                            <Route
                                path="/admin/tourprogram/:id"
                                exact
                                component={TourProgramDetailPage}
                            />
                            <Route
                                path="/admin/tourtype"
                                exact
                                component={TourTypePage}
                            />
                            <Route
                                path="/admin/place"
                                exact
                                component={PlacePage}
                            />
                            <Route path="/admin" exact render={DashBoardPage} />
                            <Route
                                path="/admin/*"
                                render={UnderConstructionPage}
                            />
                            <Route path="*" render={NotFoundPage} />
                        </Switch>
                    </AdminLayout>
                </Router>
            </div>
        )
    }
}
