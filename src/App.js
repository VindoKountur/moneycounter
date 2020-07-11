import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Menu, Footer } from './components';
import { FormInput, Daftar } from './views';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';

function App() {
  // Mengambil daftar yang sudah pernah dibuat jika ada
  const persistedState = localStorage.getItem('daftarHitungan')
    ? JSON.parse(localStorage.getItem('daftarHitungan'))
    : {};

  const store = createStore(allReducers, persistedState);

  // Menambah daftarhitungan ke lokal storage
  store.subscribe(() => {
    localStorage.setItem('daftarHitungan', JSON.stringify(store.getState()));
  });

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path='/' exact>
            <FormInput />
          </Route>
          <Route path='/daftar'>
            <Daftar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
