import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./screens/HomeScreen.js";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
