import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav'
import './components/Nav.css'
import Footer from './components/footer'
import SignUp from './components/signUp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />

      <Routes>
          <Route path = "/" element = {<h1>Products</h1>} />
          <Route path = "/add" element = {<h1>Add Products</h1>} />
          <Route path = "/update" element = {<h1>Update Products</h1>} />
          <Route path = "/login" element = {<h1>Login</h1>} />
          <Route path = "/register" element = {<SignUp />} />
      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
