import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css'
import Navbar from "./components/header/Navbar";
import Home from "./pages/1.home/Home";
import Services from './pages/2.services/Services';
import Service1 from './pages/2.services/Service1';
import Service2 from './pages/2.services/Service2';
import Service3 from './pages/2.services/Service3';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer';
import Training from './pages/5.Training/Training';
import Clients from './pages/6.Clients/Clients';
import About from './pages/7.About/About';
import Team from './pages/8.Team/Team';








function App() {

  return (
    <div>
      <Router>
          <Navbar />
          

          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/service1' element={<Service1 />} />
          <Route path='/services/service2' element={<Service2 />} />
          <Route path='/services/service3' element={<Service3 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/training' element={<Training />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          </Routes>

          <Footer/>


      </Router>
    </div>
  )
}

export default App