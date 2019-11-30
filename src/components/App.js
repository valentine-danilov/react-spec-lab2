import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

const App = () => (
  <div>
    <Header >
      <Navigation />
    </Header>
    <Main />
    <Footer />
  </div>
);

export default App;