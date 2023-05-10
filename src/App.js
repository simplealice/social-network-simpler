import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthScreen from './screens/AuthScreen';
import ChatPage from './screens/ChatPage';
import FindFriendsScreen from './screens/FindFriendsScreen';
import FriendsScreen from './screens/FriendsScreen';
import MessagesScreen from './screens/MessagesScreen';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthScreen />} />
        <Route path='chat' element={<ChatPage />} />
        <Route path='findfriends' element={<FindFriendsScreen />} />
        <Route path='friends' element={<FriendsScreen />} />
        <Route path='messages' element={<MessagesScreen />} />
        <Route path='news' element={<NewsScreen />} />
        <Route path='profile' element={<ProfileScreen />} />
        <Route path='register' element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}

export default App;
