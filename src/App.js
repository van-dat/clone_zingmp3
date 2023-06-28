import './index.scss';
import {Home, Login, Public, Personal} from './containers/public'
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Path from './ultis/path';
import { useEffect } from 'react';
import * as actions from './store/actions'


function App() {
  const dispatch = useDispatch(
    useEffect(()=>{
      dispatch(actions.getHome())
    },[])
  )
  return (
    <div className="App">
      <Routes>
        <Route path={Path.PUBLIC} element={<Public/>}>
          <Route path={Path.HOME} element={<Home/>}/>
          <Route path={Path.MYMUSIC} element={<Personal/>}/>
          <Route path={Path.LOGIN} element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
