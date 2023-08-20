import './App.css';
import Login from './Login';
import Profile from './Profile';
function App() {
  const user=JSON.parse(localStorage.getItem('user'));
  return user?<Profile/>:<Login/>;
}

export default App;
