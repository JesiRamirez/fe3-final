import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import NotFound from './Routes/NotFound'
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/favs' element= {<Favs/>}/>
            <Route path='/detail' element= {<Detail/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='*' element= {<NotFound/>}/>
          </Routes>
      </div>
  );
}

export default App;
