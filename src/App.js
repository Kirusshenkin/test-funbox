import React from 'react';
import './styles/style.css'
import Feed from './components/feed'
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="section-title">
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
