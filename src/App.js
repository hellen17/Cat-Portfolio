import './App.css';
import LandingPage from './components/LandingPage';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    // 2. Wrap ChakraProvider at the root of your app
    <ChakraProvider>
        <LandingPage />
    </ChakraProvider>

  );
}

export default App;
