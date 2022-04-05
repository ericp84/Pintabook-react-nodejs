import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profil from './pages/Profil/Profil';
import NavBar from './components/Nav/NavBar';

import pseudo from './Reducers/pseudo';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({pseudo}))



function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Profil" element={<Profil/>}/>
        </Routes>
    </Provider>
  );
}

export default App;
