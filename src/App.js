import './App.css';

import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Book } from './pages/Book'
import { Contact } from './pages/Contact'
import { BookList } from './pages/BookList';
import { NewBook } from './pages/NewBook';
import { NotFound } from './pages/NotFound';
import { BookLayout } from './pages/BookLayout';
import './style.css'


function App() {

  // useRoutes is a react hook which can be a different method for specifiying our routes in react-router-dom but it's less common and it's a matter of preference to make use of this method or JSX
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ])

  return (
    <>
      {/* {element} */}

      {/* having multiple Routes is good for when we have a sidebar and the sidebar shows the same thing in most pages but in some pages in might be different*/}
      {/* having hardcoded url by making use of location attribute is a good practice for some specific circumstances that we wanna make sure that we're gonna display a specific content everywhere regardless of the current url we are in */}
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}

      <nav>
        <ul>
          {/* replace will remove that specific page from your visiting history and its use case is when for example a user has already logged in and they click back and you wanna avoid the log-in process once again for the previously logged-in user */}
          {/* State property this allows you to pass data along between one link and the other but that data is not gonna show up in the URL bar and that's the real benefit of using it that it's not a part of the URL */}
          {/* routes won't reload the page while navigating through different sections we've specified but if we want to, then we use reloadDocument property on our Link component */}
          {/* <li><Link to="/" replace>Home</Link></li>
          <li><Link to="/books">Book</Link></li>
          <li><Link to="/contact" reloadDocument>Contact</Link></li> */}
          {/* NavLink has the same traits of Link but the only different is that we can have className, children and style property on them and it's a good for when we wanna specify the active link on our navigation and the use case of end property is for when we don't wanna have the parent element in our routes as the active one when we are on the child component */}

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink end to="/books">Book</NavLink></li>
          <li><NavLink to="/contact" reloadDocument>Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
