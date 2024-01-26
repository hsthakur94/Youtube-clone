import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import SearchPage from './SearchPage/SearchPage';
import Sidebar from './SideBar/Sidebar';
function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>

          {/* Routes for Main Page */}
            <Route path='/' element = 
            {
            <>
            <Header/> 
            <div className='app__page'>
                <Sidebar/>
                <RecommendedVideos/>
            </div> </>}/>

            {/* Routes for Search Page */}
            <Route path='/search/:searchItem' element = 
            {
            <>
            <Header/> 
            <div className='app__page'>
                <Sidebar/>
                <SearchPage/>
            </div> </>}/>
           
        </Routes>
      </div>
    </BrowserRouter> 
    
     
    
    
  );
}

export default App;
