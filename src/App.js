import './App.css';
import LandingPage from './components/LandingPage';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    // 2. Wrap ChakraProvider at the root of your app
    <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
