import React from 'react';
import Login from './components/Login';
import Register from "./components/Signup";
import { Route, Routes } from 'react-router-dom';
import Task from './components/Task';
import PrivateRoute from './components/PrivateRoute';

function App() {


  return (
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route
            path="/task"
            element={
              <PrivateRoute>
                <Task />
              </PrivateRoute>
            }
          />
        </Routes>
  );
}

export default App;
