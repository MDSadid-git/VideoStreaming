import React from "react";
import "./MainContainer.css";
import NavBar from "./NavBar/NavBar";
import lashofTree from "../../Assets/LashOFtree.png";
import girlFire from "../../Assets/girFire.jpg";
import ghost from "../../Assets/Ghost.jpg";
import Black from "../../Assets/black.jpeg";
import carbanak from "../../Assets/maxresdefault.jpg";
import Iron from "../../Assets/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg";
import Avengers from "../../Assets/Avengers-Endgame.jpg";

const MainContainer = () => {
  return (
    <div className="MainArea mx-20">
      <NavBar />
      <div className=" mt-5">
        <img src={lashofTree} alt="" className="coverImage" />
        <div className="itemsContainer ml-20">
          <p className="text-lg text-white font-extrabold -mt-72 ">
            The Conjuring Movie
          </p>
          <p className="text-white">98% Match</p>
          <div className="flex items-center mt-3">
            <button className="btn bg-slate-300 text-black font-extrabold py-2 hover:text-white">
              Watch Now
            </button>
            <div className="flex items-center justify-center align-middle">
              <p className="btn bg-red-600 ml-3 text-2xl font-bold text-white">
                +
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-52 text-white text-lg font-bold myarea text-center mb-32">
        <h4 className="mb-5">Continue Watching</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          <div className="card card-compact w-60 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src={girlFire}
                alt="Shoes"
                className="w-full h-44 bg-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-60 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img src={ghost} alt="Shoes" className="w-full h-44 bg-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ghost</h2>
              <p>If a dog Ghost choose?</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-60 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img src={Black} alt="Shoes" className="w-full h-44 bg-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Black Wioow!</h2>
              <p>Black Wioow shoes does he choose?</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-60 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src={carbanak}
                alt="Shoes"
                className="w-full h-44 bg-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Carbanak!</h2>
              <p>If Carbanak!!! does he choose?</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-60 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img src={Iron} alt="Shoes" className="w-full h-44 bg-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Iron!</h2>
              <p>Iron shoes does he choose?</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-60 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src={Avengers}
                alt="Shoes"
                className="w-full h-44 bg-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Avengers!</h2>
              <p>If choose Avengers Shows?</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
