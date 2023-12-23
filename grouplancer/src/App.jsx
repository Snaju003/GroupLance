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
import Jobs from './Components/Jobs';

// import Recruit from './Components/Recruit';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBox from './Components/ChatBox/ChatBox';
import Recruits from './Components/Recruits';
import UserAccounts from './Components/UserAccounts';
import Groups from './Components/Groups';
import { useEffect } from 'react';
import { useUser } from './context/UserContext';
import MyGroups from './Components/Mygroups';
import TopGroups from './Components/Topgroups';

function App() {
  const bgcolor = "#0f054c";
  const accessTokenExpire = parseInt(5, 10);
  const time = accessTokenExpire * 60 * 1000;
  const { login } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const refreshToken = localStorage.getItem("refresh-token");
      const response = await fetch("http://localhost:8080/api/auth/refresh", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "refresh-token": refreshToken
        },
      });
      const data = await response.json();
      localStorage.setItem('auth-token', data.acceessToken);
      localStorage.setItem('refresh-token', data.refreshToken);
      login(data.user);
    }
    fetchData();
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const refreshToken = localStorage.getItem("refresh-token");
        const response = await fetch("http://localhost:8080/api/auth/refresh", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "refresh-token": refreshToken
          },
        });
        const data = await response.json();
        localStorage.setItem('auth-token', data.acceessToken);
        localStorage.setItem('refresh-token', data.refreshToken);
        return data.user;
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    const intervalId = setInterval(() => {
      const user = fetchData();
      login(user);
    }, time);
    return () => {
      clearInterval(intervalId);
    }
  });


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
          <Route exact path='/Mygroups' element={<MyGroups />} />
          <Route exact path='/creategroup' element={<CreateGroup />} />
          <Route exact path='/joinedgroups' element={<JoinedGroups />} />
          <Route exact path='/findjob' element={<Jobs />} />
          <Route exact path='/recruit' element={<Recruits />} />
          <Route exact path='/topgroups' element={<TopGroups />} />
          <Route exact path='/chatbox' element={<ChatBox />} />
          <Route exact path='/userAccount' element={<UserAccounts />} />
          <Route exact path='/groups' element={<Groups />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
