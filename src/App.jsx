
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SettingsForm from './Context/SettingsForm/index'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo';
import AuthProvider from './Context/Auth';
import AuthMethod from './Components/UserMethods';
import Auth from './Components/Auth';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <AuthProvider>
          <AuthMethod/>
          <Auth capability='read'> <p>I read</p></Auth>
          <Auth capability='create'> <p>I create</p></Auth>
          <Auth capability='update'> <p>I update</p></Auth>
          <Auth capability='delete'> <p> delete</p></Auth>
              <Header />
              <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/settings" element={<SettingsForm/>}/>
              </Routes>
            <Footer />
            </AuthProvider>
        </Router>
        
      </>
    );
  }
}