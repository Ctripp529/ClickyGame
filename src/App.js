import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import CharCard from "./components/Character/";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
   characters: characters,
   score:0,
   topScore: 0,
   message: "Click all the images just ONCE!"
  };
  console.log(this.state)
  this.cardClick = this.cardClick.bind(this);
  }

  cardClick(id){
 // create a copy of the cards and use a random method to sort the array
 let count = (11 - this.state.score);
 let clickedCard = this.state.characters.filter(card => card.id === id)[0];
 let charCopy = this.state.characters.slice().sort(function(a, b){return 0.5 - Math.random()});
 // if a card has not been clicked, set its clicked state to true
 if (!clickedCard.clicked) {
   clickedCard.clicked = true;
   charCopy[charCopy.findIndex((characters) => characters.id === id)] = clickedCard;
   
   // set the state and increment the counter
   this.setState({
     characters: charCopy,
     score: this.state.score + 1,
     topScore: (this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore),
     message: "You still need to click " + count + " more!"
   });
 } else if(this.state.score === 12){
   this.setState({
     message: "YOU WON!"
   })
 }
 
 // if a card has been clicked already, then set its click to false and reset the game
 else {
   
   let resetCharCopy = charCopy.map((characters) => {
     return {
       id: characters.id,
       image: characters.image,
       clicked: false,
     }
   });
   this.setState({
     characters: resetCharCopy,
     score: 0,
     message: "You clicked an image twice"
   });
 } 
}

  render(){
    return (
    <div>
      <Header score ={this.state.score} topScore ={this.state.topScore} message={this.state.message}/>
        <Wrapper>
        {
          this.state.characters.map(characters => (
            <div>
              <CharCard
              key={characters.id}
              id={characters.id}
              image={characters.image}
              cardClick ={this.cardClick}
              />
              </div>
          ))
        }
      </Wrapper>
    </div>
    );
  }
}

export default App;
