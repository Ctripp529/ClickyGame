import React from "react";
import "./HeaderStyle.css"
//need to import score and message of win or lose
//display message default/instructions, win or lose

const Header = (props) =>{
    return (
      <div>
    <nav className="navbar">
      <span className="navbar-brand">Clicky Game</span>
      <span>{props.message}</span>
      <span>Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
    <header className="App-header">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
        <h1 className="display-4">Clicky Game</h1>
        <p className="lead">Click on an image to earn points, but don't click on an image more than once!</p>
        </div>
      </div>
   </header>
   </div>
    )
};

export default Header;
