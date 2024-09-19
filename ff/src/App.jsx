// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RecipeList from './assets/components/RecipeList';
// import RecipeDetail from './assets/components/RecipeDetail';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Flavour-Fusion recipe</h1>
//         </header>
//         <Routes>
//           <Route path="/" element={<RecipeList />} />
//           <Route path="/recipe/:id" element={<RecipeDetail />} />
//         </Routes>
//         <footer>
//           <p>© 2024 Flavour-fusion Recipes | All Rights Reserved</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ContainerSection from './components/ContainerSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Marquee from './components/MarqueeSection';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <ContainerSection />
      <div>
      <Marquee category="Indian" backgroundColor="#0E3E9C" direction="left-right" />
      <Marquee category="Italian" textColor="black" backgroundColor="white" direction="right-left" />
      <Marquee category="Middle Eastern" backgroundColor="#0E3E9C" direction="left-right" />
    </div>

      <AboutSection />
      <ContactSection />


    </div>
  );
}

export default App;
