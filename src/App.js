import Header from './components/header/Header';
import Home from './feature/home/index';
import CV from './feature/work/index';
import ScrollToTop from './constants/ScrollToTop';
import { Route, Switch } from 'react-router-dom';
import ToggleColorMode from './components/UI/theme';
import AuthFeature from './feature/Auth/index';
import Admin from './feature/Admin/index';
import { useSelector } from 'react-redux';
import React from 'react';
function App() {
  const loginInUser = useSelector(state => state.auth.current)
   
  return (
    <div>
      <ToggleColorMode> 
         
        {!!loginInUser.username ?
          <></>
          :
          <Header/>
        }
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Header/>
               <Home/> 
            </Route>
            <Route path="/cv">
               
              <CV/>
            </Route>
            <Route path="/loginPhanVanThanh">
              <AuthFeature/>
            </Route>
            <Route path="/admin"> 
              {!!loginInUser.username ?
                <Admin/>
                :
                <></>
              }
            </Route>
          </Switch>
        </ScrollToTop> 
      </ToggleColorMode>
    </div>
  );
}

export default App;
