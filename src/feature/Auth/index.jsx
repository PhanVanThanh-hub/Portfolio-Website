import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
 

AuthFeature.propTypes = {

};

function AuthFeature(props) {
    const match = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route path={`${match.url}`} exact>
                    <LoginPage />
                </Route>
                <Route path={`${match.url}/login`}>
                    <LoginPage />
                </Route>
            </Switch>
        </div>
    );
}

export default AuthFeature;