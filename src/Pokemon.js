import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import axios from 'axios'
import pokeball from './pokeballCatch.gif'
function Pokemon({ pokemonData, position }) {
    const [pokeInfo, setPokeInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let pos = position + 1;


    useEffect(() => {

      const fetchPokemonUrl = async () => {
        let pokeArr = "";
        
        if(position >= 0){
        const result = await axios(`https://pokeapi.co/api/v2/pokemon/${pos}`);
        // console.log(result.data)
        pokeArr = (result.data.sprites.other.home.front_default); 
        
       console.log(pokeArr)
       setPokeInfo(pokeArr);
       setIsLoading(false);

      }
      }
      
      fetchPokemonUrl();
 
    },[position, pos])



      const pokeData = pokemonData.map((pokemon, i) =>
      <span key = {i} className = "pokemon">
        <h1 key = {pokemon.name}>{pokemon.name.toUpperCase()}</h1>
          <img className ="pokeImage"src={pokeInfo} alt="Pokemon"/>    
      </span>
    
       );

      
  return isLoading ?(
  <div className='loading' >
  <img src ={pokeball} alt="loading"/>
  <p id ="catch">Catching...</p>
  </div>
  ) : (
      
    <div className="pokemonCard">
            <div className="pokemon-front">
                {pokeData[position]}
            </div>

      

  </div> );
}

export default Pokemon;
