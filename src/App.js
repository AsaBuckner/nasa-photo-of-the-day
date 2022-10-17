import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import ImgComp from "./ImgComp"


  const dummyData = {
    date: "2022-10-17",

    explanation : "Why would x-ray rings appear around a gamma-ray burst?  The surprising answer has little to do with the explosion itself but rather with light reflected off areas of dust-laden gas in our own Milky Way Galaxy.  GRB 221009A was a tremendous explosion -- a very bright gamma-ray burst (GRB) that occurred far across the universe with radiation just arriving in our Solar System last week.  Since GRBs can also emit copious amounts of x-rays, a bright flash of x-rays arrived nearly simultaneously with the gamma-radiation. In this case, the X-rays also bounced off regions high in dust right here in our Milky Way Galaxy, creating the unusual reflections. The greater the angle between reflecting Milky Way dust and the GRB, the greater the radius of the X-ray rings, and, typically, the longer it takes for these light-echoes to arrive.",

    hdurl : "https://apod.nasa.gov/apod/image/2210/GrbRings_SwiftMiller_1458.jpg",

    title : "X-Ray Rings Around a Gamma Ray Burst",

  }

function App() {
  const [Data, setData] = useState(dummyData)




//  useEffect(() => {

//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)

//     .then(res => { 
//       setData(res.data)
//     })

//     .catch(err => {
//       console.error(err)
//     })

//     }, [])
  
  



  return (

    <div>
      <div className="siteheader">
        
          <div className="title">
            <h1>Daily Cosmos Snapshot</h1>
          </div>

      </div>

      <ImgComp photo={Data}/>
        
    </div>

  );
}

export default App;
