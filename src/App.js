import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<BookPage />}
      />
      <Route
        path="/authors"
        element={<Authors />}
      />
    </Routes>
  </Router>

);

export default App;
