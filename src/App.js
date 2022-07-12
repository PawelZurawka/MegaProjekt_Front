import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HomePage } from './pages/home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AddPostPage } from './pages/AddPostPage/AddPostPage';
import { SettingsPage } from './pages/SettingsPage/SettingsPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';
import { ContactPage } from './pages/ContactPage/ContactPage';

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/register"
          element={user ? <HomePage /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={user ? <HomePage /> : <LoginPage />}
        />
        <Route
          path="/add-post"
          element={user ? <AddPostPage /> : <RegisterPage />}
        />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <RegisterPage />}
        />
        <Route
          path="/post/:id"
          element={<SinglePostPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
