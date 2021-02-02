
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sunday from './components/Home'
import Leadership from './components/Leadership'
import Beliefs from './components/Beliefs'
import Locations from './components/Locations'
import Chat from './components/AppChat'


function App() {
  
 
  return (

    <>
    <div className="container">

      <Router>
        <Navbar/>
        
        <Switch>
          
            <Route path='/' exact component={Sunday}/>
            <Route path='/leadership' component={Leadership}/>
            <Route path='/beliefs' exact component={Beliefs}/>
            <Route path='/locations' exact component={Locations}/>
            
            
        </Switch>
        <Route path='/chat' exact component={Chat} />
      </Router>
      </div>
    </>

  );
  
}

export default App;
