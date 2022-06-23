import React, {useState} from 'react';
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {

  const [userData, setUserData] = useState({})

  const showMessageHandler = (name, subject) => {
    setUserData({name:name, subject:subject})
  }

  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Projects/>
      <Contact onShowMessage={showMessageHandler} userData={userData}/>
      <Footer/>
    </div>
  );
}

export default App;
