import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import styles from './styles/Layout.module.css';

// ── Layout wraps every page with the sticky Header ────────────────────
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

// ── App ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index        element={<Home />}     />
            <Route path="gallery" element={<ListPage />} />
            <Route path="contact" element={<Contact />}  />
            <Route path="*"     element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
