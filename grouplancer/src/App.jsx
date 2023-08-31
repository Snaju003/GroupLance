import './App.css';
import CreateGroup from './Components/CreateGroup';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import JoinedGroups from './Components/JoinedGroups';
import LiveGroups from './Components/LiveGroups';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/livegroups' element={<LiveGroups />} />
          <Route exact path='/creategroup' element={<CreateGroup />} />
          <Route exact path='/joinedgroups' element={<JoinedGroups />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;