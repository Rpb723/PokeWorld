import React, { useState } from 'react';
import Pokemon from './Pokemon';
import Search from './Search';
import './PokemonGrid.css'
import pokeball from './pokeballCatch.gif'

function PokemonGrid({ pokemonData, isLoading }) {
  // console.log(pokemonData);
const { results } = pokemonData;

const [pos, setPos]  = useState([]);
let posArray = [];
let num = undefined;
let word = "";
let posArray2 = [];


function pokeyArr(){
  results?.map((object, k) =>{
    return(
    num = k,
    posArray2.push(num)
    )
})
// setPos2(posArray2);
return posArray2;
}


function HandleSearch(q){
  results.map((object, k) =>{
        const pokemon = JSON.stringify(object.name).toLowerCase();
        if(pokemon.includes(q.toLowerCase())){
            num = k;
            posArray.push(num);
            word = q;
            console.log(pokemon);       
        }
        if(word !== q){
          posArray=[];
        }else if (word === "" || word === undefined){
            return posArray;
        }
        return false;
    })
    
    setPos(posArray);
    console.log(posArray);
  }  



const pokemonCustom = pos.map((num) => 
   <Pokemon key={num} pokemonData={results} position={num}></Pokemon>
)
const pokemonStandard = pokeyArr().map((object) =>
  <Pokemon key={object} pokemonData={results} position={object}></Pokemon>
)
  


function printPokemonCard(){
  if(pos.length === 0 || pos === undefined){
    return pokemonStandard;
  }else if(pos.length > 0){
    return pokemonCustom;
  }

}

  return isLoading?(
    <div className='loading' >
  <img src ={pokeball} alt="loading"/>
  <p id ="catch">Catching...</p>
  </div>
    ):(
  <div className="cards">
      {/* {pokeData} */}
      <Search HandleSearch ={HandleSearch}/>
      <div className='pokecards'>{printPokemonCard()}</div>
      
  </div>


  )
}

export default PokemonGrid;
