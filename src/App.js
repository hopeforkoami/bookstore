import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BookPage from './pages/BookPage';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<BookPage />}
      />
      <Route
        path="/authors"
        element={<BookPage />}
      />
    </Routes>
  </Router>

);

export default App;
