import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PersonalAccount from './pages/PersonalAccount';
import NavBarPersonalAccount from './pages/NavBarPersonalAccount';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' Component={MainPage}/>
        <Route path='/PersonalAccount' Component={PersonalAccount}/>
        <Route path='/NavBarPA' Component={NavBarPersonalAccount}/>
      </Routes>
    </div>
  );
}

export default App;
