import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chat from './Chat'
import Login from "./Login"
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {/* Header */}
      <Router>
        {!user ? (
          <Login />) : (
          <>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">

                </Route>

              </Switch>
            </div>
          </>
        )}
        {/* React-Router->Chat Screen */}

      </Router>
    </div>
  );
}

export default App;
