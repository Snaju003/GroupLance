import './App.css';
import AboutUs from './Components/AboutUs';
import CreateGroup from './Components/CreateGroup';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import JoinedGroups from './Components/JoinedGroups';
import LiveGroups from './Components/LiveGroups';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
// import Jobs from './Components/Jobs';
// import Recruit from './Components/Recruit';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBox from './Components/ChatBox/ChatBox';
import Recruits from './Components/Recruits';
import UserAccounts from './Components/UserAccounts';

function App() {
  const bgcolor = "#0f054c";
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home bgcolor={bgcolor} />} />
          <Route exact path='/aboutus' element={<AboutUs bgcolor={bgcolor} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/livegroups' element={<LiveGroups />} />
          <Route exact path='/creategroup' element={<CreateGroup />} />
          <Route exact path='/joinedgroups' element={<JoinedGroups />} />
          {/* <Route exact path='/findjob' element={<Jobs />} /> */}
          <Route exact path='/recruit' element={<Recruits />} />
          <Route exact path='/chatbox' element={<ChatBox />} />
          <Route exact path='/userAccount' element={<UserAccounts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
