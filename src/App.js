import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TasksManagement from './pages/TasksManagement';
import CoffeeCashier from './pages/CoffeeCashier';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Box
        w={{base:'100vw', sm:'100vw', md:'100vw', lg:'74vw', xl:'74vw'}}
        mx={'auto'}
      >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tasksmanagement' element={<TasksManagement/>} />
          <Route path='/coffecashier' element={<CoffeeCashier/>} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
