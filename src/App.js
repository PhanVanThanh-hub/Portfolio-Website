import Header from './components/header/Header';
import Home from './feature/home/index';
import CV from './feature/work/index';
import ScrollToTop from './constants/ScrollToTop';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/cv">
            <CV/>
          </Route>
        </Switch>
      </ScrollToTop> 
    </div>
  );
}

export default App;
