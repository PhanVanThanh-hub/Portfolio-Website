import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminIntro from './components/intro/index';
import AdminAbout from './components/about/index';
import AdminProduct from './components/product/index';
import AdminPage from './page/PageAdmin';
Admin.propTypes = {

};

function Admin(props) {
   const match = useRouteMatch()
   return (
      <div>
         <Switch>
            <Route path={`${match.url}`} exact>
               <AdminPage/>
            </Route>
            <Route path={`${match.url}/intro`}>
               <AdminIntro/>
            </Route>
            <Route path={`${match.url}/about`}>
               <AdminAbout/>
            </Route>
            <Route path={`${match.url}/product`}>
               <AdminProduct/> 
            </Route>
         </Switch>
      </div>
    );
}

export default Admin;