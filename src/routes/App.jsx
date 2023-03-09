import Layout from '../containers/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Studies from '../pages/Studies';
import Contact from '../pages/Contact';
import Hobbies from '../pages/Hobbies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/studies' element={<Studies />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/hobbies' element={<Hobbies />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
