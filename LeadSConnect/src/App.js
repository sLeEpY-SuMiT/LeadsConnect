import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { GlobalProvider } from './components/GlobalState';

function App(props) {

  return (
    <GlobalProvider>
      <Header />

      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>

      <Footer />
    </GlobalProvider>

  );
}

export default App;
