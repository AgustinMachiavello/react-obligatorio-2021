import {Component, React} from 'react';

// Router
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import PageWrapper from './components/PageWrapper';

// Pages
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';


class App extends Component {

  render(){
    return (
      <div className="App">
        <div>
          <Router>
            <PageWrapper>
              <Route
                exact={true}
                path="/"
                component={Register}
              />
              <Route
                exact={true}
                path="/login"
                component={LogIn}
              />
              <Route
                exact={true}
                path="/signup"
                component={Register}
              />
              <Route
                exact={true}
                path="/dashboard"
                component={Dashboard}
              />
            </PageWrapper>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;


/*
Comentarios:

Flujo:
- Registrar
  FORM email, pass, etc
  BTN Registrar
  LINK Ir a Login
- Login
  FORM email, pass 
  BTN Login
    IF token:
      guardar token en localstorage (INSEGURO, pero ta)
  LINK Registrar
- Dashboard
  * IF not logged
    ROUTE Login
    FETCH datos
    Mostrar

API:
https://plan-nature.000webhostapp.com/api/

localStorage:
- Setear:
localStorage.setItem('user_info', JSON.stringify(response));
- Obtener:
localStorage.getItem('API_TOKEN')
*/
