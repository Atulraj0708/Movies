import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from "./pages/Home"; // Import the Home component

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* Define the route for the Home component */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
