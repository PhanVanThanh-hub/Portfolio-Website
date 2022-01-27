import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminIntro from './components/intro/index';
import AdminAbout from './components/about/index';
import AdminProduct from './components/product/index';
import AdminPage from './page/PageAdmin';
import AdminFAQ from './components/faq/index';
import AdminContact from './components/contact/index';
import AdminEducation from './components/education/index';
import AdminExperience from './components/experience/index';
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
            <Route path={`${match.url}/faq`}>
               <AdminFAQ/> 
            </Route>
            <Route path={`${match.url}/contact`}>
               <AdminContact/> 
            </Route> 
            <Route path={`${match.url}/education`}>
               <AdminEducation/> 
            </Route> 
            <Route path={`${match.url}/experience`}>
               <AdminExperience/> 
            </Route> 
         </Switch>
      </div>
    );
}

export default Admin;