import { Route, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogPost />} />
      <Route path="/:slug" element={<SinglePost />} />
    </Routes>
  );
}

export default App;
