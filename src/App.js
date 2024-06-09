import logo from './logo.svg';
import './App.css';
import AddStud from './components/AddStud';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStud/>}/>
    <Route path='search' element={<SearchStudent/>}/>
    <Route path='delete' element={<DeleteStudent/>}/>
    <Route path='viewall' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
