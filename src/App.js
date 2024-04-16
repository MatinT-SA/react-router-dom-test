import './App.css';

import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Book } from './pages/Book'
import { BookList } from './pages/BookList';
import { NewBook } from './pages/NewBook';
import { NotFound } from './pages/NotFound';
import { BookLayout } from './pages/BookLayout';


function App() {
  return (
    <>
      {/* having multiple Routes is good for when we have a sidebar and the sidebar shows the same thing in most pages but in some pages in might be different*/}
      {/* having hardcoded url by making use of location attribute is a good practice for some specific circumstances that we wanna make sure that we're gonna display a specific content everywhere regardless of the current url we are in */}
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Book</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
