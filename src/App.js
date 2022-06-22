import "./App.css";
import React, { useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=>  {
 const  pageSize = 5;
 const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(10)



    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}

      />
          <Routes>
            <Route
              path="/"
              element={
               <News setProgress={setprogress} 
                  apiKey={apiKey}
                  key="General"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                 />
              }
            />
            <Route
              path="business"
              element={
                <News setProgress={setprogress} 
                  apiKey={apiKey}
                  key="Business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="entertainment"
              element={
                <News setProgress={setprogress} 
                apiKey={apiKey}
                  key="Entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="general"
              element={
                <News setProgress={setprogress} 
                apiKey={apiKey}
                  key="General"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="health"
              element={
                <News setProgress={setprogress} 
                apiKey={apiKey}
                  key="Health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="science"
              element={
                <News setProgress={setprogress} 
                apiKey={apiKey}
                  key="Science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="sports"
              element={
                <News setProgress={setprogress} 
                apiKey={apiKey}
                  key="Sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="technology"
              element={
                <News setProgress={setprogress} 
                apiKey={apiKey}
                  key="Technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;