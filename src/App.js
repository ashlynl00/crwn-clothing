import Home from './routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
        <Route path='home' element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
