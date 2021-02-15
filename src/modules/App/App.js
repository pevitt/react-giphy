import React from 'react';
import { Link, Route } from "wouter";
// import logo from '../../logo.svg';
import './App.css';
import Home from '../../pages/home/index';
import SearchResults from '../../pages/searchResults/index';
import DetailGif from '../../pages/detail/index';
import StaticContext from '../../context/StaticContext';
import { GifsContextProvider } from "../../context/GifsContext";

const HomePage = React.lazy(() => import("./pages/Home"));

// const GIFS = ['https://media4.giphy.com/media/TObbUke0z8Mo/200.gif?cid=ecf05e47xh1eypwiavhpfr5pbj31t56iccn9yh39rtpuzn3w&rid=200.gif', 'https://media1.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=ecf05e47xh1eypwiavhpfr5pbj31t56iccn9yh39rtpuzn3w&rid=giphy.gif']
// const GIFS_DIFF = ['https://media0.giphy.com/media/KyBX9ektgXWve/giphy.gif?cid=ecf05e47xh1eypwiavhpfr5pbj31t56iccn9yh39rtpuzn3w&rid=giphy.gif', 'https://media4.giphy.com/media/jKpVHextCiB8c/200w.gif?cid=ecf05e47xh1eypwiavhpfr5pbj31t56iccn9yh39rtpuzn3w&rid=200w.gif']

function App() {
  // const value = state[0]
  // const updateValue = state[1]
  return (
    <StaticContext.Provider value={{
      name: 'pevitt',
      suscribeteAlCanal: true
    }}>
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/'>Home</Link>
        {/* <Link to='/gif/venezuela'>Venezuela</Link> */}
        <GifsContextProvider>
          <Route 
            component={HomePage}
            path="/"
          />
          <Route 
            component={SearchResults}
            path="/gif/:keyword"
          />
          <Route 
            component={DetailGif}
            path="/gif/showGif/:id"
          />
        </GifsContextProvider>
        {/* <Route 
          component={ListOfGifs}
          path="/gif/:keyword"
        /> */}
        {/* <Route 
          component={showGif}
          path="/gif/showGif/:id"
        /> */}
       {/* <button onClick={() => setKeyword('mapache')}>Cambiar Keyword</button>
        {
          <ListOfGifs keyword={keyword} />
        } */}
        
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
