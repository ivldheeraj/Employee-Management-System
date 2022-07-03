import './App.css';
import{ BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route exact path='/'  element= {<ListEmployee/>}></Route>
          <Route path='/employees' element = {<ListEmployee/>}></Route>
          <Route path='/addEmployee' element = {<AddEmployee/>}></Route>

        </Routes>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
