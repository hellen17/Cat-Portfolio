import './App.css';
import LandingPage from './sections/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './sections/SignUp';
import SignIn from './sections/SignIn';
import DisplayVets from './sections/DisplayVets';
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
          <Route path="/vets" element={<DisplayVets/>} />
          </Routes>
          <Footer />

        </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
