
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './Context/Settings'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* Your home components and logic here */}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </div>
      <Todo/>
      <Footer/>
    </Router>
  );
}

export default App;