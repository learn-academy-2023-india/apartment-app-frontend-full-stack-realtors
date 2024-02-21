import React from "react"
import HomeBackgroundImage from "../assets/HomeApartmentImage.jpeg"


const Home = () => {
  return (
    <>
      <div  style={{backgroundImage: `url(${HomeBackgroundImage})`}} className="home-background">
        <div className="welcome-box">
          <h1>EXPLORER YOUR NEW HOME</h1>
        </div>
      </div>
    </>
  )
}

export default Home