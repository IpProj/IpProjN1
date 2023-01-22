import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            // id="12321341"
            title="Over Toilet Storage Rack"
            price={2000}
            rating={5}
            image="https://i.roamcdn.net/hz/qe/listing-thumb-360w/fd9a90ec4439289f8f6f03b905d2ebc1/-/horizon-files-prod/qe/picture/q7887w5q/fbc5682a506557785bab95486b96bf1d7ff51fa0.jpg"
          />
          <Product
            id="49538094"
            title="Saachi 3 in 1 // የጁስ የቡና የቅመም መፍጫ"
            price={2500}
            rating={4}
            image="https://i.roamcdn.net/hz/qe/listing-gallery-full-1920w/d7130cd588c9a4c670121d92ab4f1d9c/-/horizon-files-prod/qe/picture/qnggdpx0/023c50a6e3ecde001b6a735e8c5db4ec01fed88e.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="LCD Writing Tablet 《 8.5 Inch 》"
            price={2800}
            rating={3}
            image="https://i.roamcdn.net/hz/qe/listing-gallery-main-844w/ba97abccc4a43baf238c6a744e3bee44/-/horizon-files-prod/qe/picture/qdeewkx5/9c5e93554489d8cb9b909dae2bb3f57c3b0e1375.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://i.roamcdn.net/hz/qe/listing-gallery-full-1920w/4d28e05ebda2eddbd3523e6c10a81334/-/horizon-files-prod/qe/picture/q78875kd/2b28665a57e2d11f11e646969bb4ea223b0fa3b0.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
