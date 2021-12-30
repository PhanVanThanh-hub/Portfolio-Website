import Header from './components/header/Header';
import Home from './feature/home/index';
import CV from './feature/work/index';
import ScrollToTop from './constants/ScrollToTop';
import { Route, Switch } from 'react-router-dom';
import ToggleColorMode from './components/UI/theme';
import AuthFeature from './feature/Auth/index';
import Admin from './feature/Admin/index';
import { useSelector } from 'react-redux';
import React, {   useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DrawerContainer from './layout/DrawerContainer';
import Intro from './feature/Admin/components/intro/index';
function App() {
  // const loginInUser = useSelector(state => state.auth.current)
   
  // const history = useHistory();
  // useEffect(() => {
  //   if(!!loginInUser.username===true){

  //     history.push('/admin');
  //   }
  // },[loginInUser.username]);
  return (
    <div>
      <ToggleColorMode> 
        {/* <Header/> */}
        {/* <DrawerContainer/> */}
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              {/* <Home/> */}
            </Route>
            <Route path="/cv">
              <CV/>
            </Route>
            <Route path="/loginPhanVanThanh">
              <AuthFeature/>
            </Route>
            {/* <Route path="/admin"> 
              {!!loginInUser.username ?
                <Admin/>
                :
                <Home/>
              }
            </Route> */}
            <Route path="/admin"> 
              <Admin/>
            </Route>
            <Route path="/intro"> 
              <Intro/>
            </Route>
          </Switch>
        </ScrollToTop> 
      </ToggleColorMode>
    </div>
  );
}

export default App;
