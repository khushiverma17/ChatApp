import './App.css';
import './App.css'
import MainContainer from './Components/MainContainer';
import Login from './Components/Login';
import {Route, Routes} from "react-router-dom"
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import Users from './Components/Users'
import Groups from './Components/Groups';
import CreateGroups from './Components/CreateGroups';
import { useSelector } from "react-redux";
function App() {
  const lightTheme=useSelector(state=>state.themeKey);
  return (
    <div className={"App" + ((lightTheme)?"" : " dark")}>
      
      {/* <MainContainer/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="app" element={<MainContainer/>}>
          <Route path="welcome" element={<Welcome/>}></Route>
          <Route path="chat" element={<ChatArea/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="groups" element={<Groups/>}></Route>
          <Route path="creategroups" element={<CreateGroups/>}></Route>


        </Route>

      </Routes>
      </div>
  );
}

export default App;
