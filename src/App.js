import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomaPage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAcc';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id ="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/CreateAcc'element={<CreateAccountPage />} />
        </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

