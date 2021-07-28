import React, { useEffect, useState } from "react";


const url = "https://pokeres.bastionbot.org/images/pokemon";


function Room() {
    const [openedCard, setOpenedCard] = useState([]);
   
    const [matched, setMatched] = useState([]);
    const [scores, setScores] = useState(0);

  
    const pokemons = [
      { id: 1, name: "balbasaur" },
      { id: 8, name: "wartotle" },
      { id: 9, name: "blastoise" },
      { id: 6, name: "charizard" }
    ];

    function shuffleCards(array) {
      const length = array.length;
      for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
      }
      return array;
    }
  
    //currently there are 4 pokemons but we need the pair
  
    const pairOfPokemons = [...pokemons, ...pokemons];
  
    function flipCard(index) {
      console.log("flipcard",index)
      setOpenedCard((opened) => [...opened, index]);
    }
  
    useEffect(() => {
      if (openedCard < 2) return;
  
      const firstMatched = pairOfPokemons[openedCard[0]];
      const secondMatched = pairOfPokemons[openedCard[1]];
  
      if (secondMatched && firstMatched.id === secondMatched.id) {
       
        setMatched([...matched, firstMatched.id]);
        setScores((moves) => moves + 1);
       
      }
  
      if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
    }, [openedCard]);
  
    return (
        <div className="App">
      <div className="">
        <div>
        Scores:{scores}
        </div>
      </div>
      <div className="row">
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          //lets flip the card

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;
          return (
         
            <div className="card">
            <div
              className={`pokemon-card m-2 ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    alt="pokemon-name"
                    width="100"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
            </div>
           
        
          );
        })}
         

      </div>

    
     
      </div>

     
      
    </div>
   
    )
}

export default Room
