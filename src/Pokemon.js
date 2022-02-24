import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import axios from 'axios'
import pokeball from './pokeballCatch.gif'
function Pokemon({ pokemonData, position }) {
    const [pokeInfo, setPokeInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let pos = position + 1;

    // function fetchPokemonData(pokemon){
    //     let url = pokemon.url;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(function(pokeData){
    //       setPokeImage(pokeData);
    //       console.log(pokeImage)
    //     },[])
    //   }
    // let arr = [];
    useEffect(() => {

      const fetchPokemonUrl = async () => {
        let pokeArr = "";
        
        if(position >= 0){
        const result = await axios(`https://pokeapi.co/api/v2/pokemon/${pos}`);
        // console.log(result.data)
        pokeArr = (result.data.sprites.other.home.front_default); 
        
       console.log(pokeArr)
       setPokeInfo(pokeArr);
      //  arr.push(pokeArr);
       setIsLoading(false);
        // setPokemonData(result.data);
        // setIsLoading(false);
        // console.log(result.data);
        // setImageData(result.sprites);
      }
      }
      
      fetchPokemonUrl();
 
    },[position, pos])

    // console.log(pokeInfo)
    
    // const result = await axios(`https://pokeapi.co/api/v2/pokemon/1`);

      const pokeData = pokemonData.map((pokemon, i) =>
      <span key = {i} className = "pokemon">
        <h1 key = {pokemon.name}>{pokemon.name.toUpperCase()}</h1>
          {/* <li key = {pokemon.name}>{pokemon.name.toUpperCase()}</li> */}
          {/* <li key = {pokemon.url}>{pokemon.url}</li> */}
          <img className ="pokeImage"src={pokeInfo} alt="Pokemon"/>
        {/* {fetchPokemonData(pokemon)} */}
    
      </span>
    
       );

      //  const pokeData2 = pokemonData.map((pokemon, i) =>
      //  <span key = {i} className = "pokemon">
      //    <h1 key = {pokemon.name}>{pokemon.name.toUpperCase()}</h1>
      //      {/* <li key = {pokemon.name}>{pokemon.name.toUpperCase()}</li> */}
      //      {/* <li key = {pokemon.url}>{pokemon.url}</li> */}
      //      <img className ="pokeImage"src={pokeInfo[i]} alt="Pokemon"/>
      //    {/* {fetchPokemonData(pokemon)} */}
     
      //  </span>
     
      //   );
      //  console.log(position)

      //  function pokePrint(){
      //    if(position > 0){
      //      return pokeData[position];
      //    }else if(position === undefined || position == 0){
      //      return pokeData2
      //    }
      //  }
      
  return isLoading ?(
  <div className='loading' >
  <img src ={pokeball} alt="loading"/>
  <p id ="catch">Catching...</p>
  </div>
  ) : (
      
    <div className="pokemonCard">
        {/* <h1>{pokemonData.name}</h1> */}
            <div className="pokemon-front">
                {pokeData[position]}
                {/* <h1>{console.log(fetchPokemonData(pokemonData))}</h1> */}
                {/* <img src ={imageData} alt= ""/> */}
                 {/* {pokeImage.map(pImage =>(
                     console.log(pImage.sprites.front_default) 
                     ))}  */}

            </div>

      

  </div> );
}

export default Pokemon;
