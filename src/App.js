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
        element={<BookList />}
      />
      <Route
        path="/calcul"
        element={<Authors />}
      />
    </Routes>
  </Router>

);

export default App;
