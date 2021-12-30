import Header from './components/header/Header';
import Home from './feature/home/index';
import CV from './feature/work/index';
import ScrollToTop from './constants/ScrollToTop';
import { Route, Switch } from 'react-router-dom';
import ToggleColorMode from './components/UI/theme';
import AuthFeature from './feature/Auth/index';
function App() {
  return (
    <div>
      <ToggleColorMode> 
        <Header/>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/cv">
              <CV/>
            </Route>
            <Route path="/loginPhanVanThanh">
              <AuthFeature/>
            </Route>
          </Switch>
        </ScrollToTop> 
      </ToggleColorMode>
    </div>
  );
}

export default App;
