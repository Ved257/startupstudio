import Scrolls from "./scrolls";
// import Anim1 from "./anim1";
// import BG_Effects from "./bgeffects";
import Navbar from './navbar';
import {useEffect} from 'react'
// import FocusAreas from "./focusareas";
// import Landing from "./landing";
// import AreYou from './areyou';
// import Disruptors from './disruptors';
// import OurPartners from './ourpartners';
// import Insights from './insights';
// import JoinUs from "./joinus";
// import Footer from "./footer";
// import FocusAreas2 from "./focusareas-2";


function App() {
  useEffect(()=>{
    const threeScript=document.createElement("script")
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js")
    document.getElementsByTagName("head")[0].appendChild(threeScript)
    return()=>{
        if(threeScript){
            threeScript.remove();
        }
    }
},[]);
  return (

    
    <div className="App">
      
     

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=PT+Serif|Open+Sans:300,400,600,700,800"
      />

      <script>var Alert = ReactBootstrap.Alert;</script>

      <Navbar/>
      {/* <Landing/> */}
      <Scrolls/>
      {/* <FocusAreas/> */}
      {/* <AreYou/> */}
      {/* <Disruptors/> */}
      {/* <Anim1/> */}
      {/* <BG_Effects/> */}
      {/* <OurPartners/> */}
      {/* <Insights/> */}
      {/* <JoinUs/> */}
      {/* <Footer/> */}
      {/* <FocusAreas2/> */}

    </div>
  );
}

export default App;
