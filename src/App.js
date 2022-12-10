import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<BookPage />}
      />
      <Route
        path="/category"
        element={<CategoryPage />}
      />
    </Routes>
  </Router>

);

export default App;
