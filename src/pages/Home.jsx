import React from "react";
import "./Home.scss";
import "../components/Skills.scss";
import { Greeting } from "../components/Greeting";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <>
      <Greeting />
      <div className="row mt-3">
        <div align="center" className=" mx-auto ml-2 col-12">
          <Skills />
        </div>
        <div align="center" className="mx-auto col-12">
          <p className="mt-3" id="home-pitch">
            From building REST APIs, to React Single Page Applications, or managing a
            SQL database, I am the person for the job.
          </p>
        </div>
      </div>
    </>
  );
}
