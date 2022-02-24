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
// const [pos2, setPos2]  = useState([]);

// for(let i = 1; i < pokemonData.length; i++){
//   posArray2.push(i);
//   setPos2(posArray2);
// }

// console.log(pos2)

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

  // console.log(results);

  // console.log(url);
//  const pokeData = results.map((pokemon, i) =>
//   <span>
//     <ul>
//       <li>{pokemon.name}</li>
//       <li>{pokemon.url}</li>
//     </ul>

//   </span>

//    );


// console.log(pokeData());
  // pokeData();

// {pokemonData.results.map(pokemon =>(
//           <Pokemon key ={pokemon.name} pokemonData={pokemon}></Pokemon>
//       ))}


const pokemonCustom = pos.map((num) => 
   <Pokemon key={num} pokemonData={results} position={num}></Pokemon>
)
const pokemonStandard = pokeyArr().map((object) =>
  <Pokemon key={object} pokemonData={results} position={object}></Pokemon>
)
  
// console.log(typeof results)

// function pokeStandard(){
//   for(let i = 0; i <=pokemonData.length; i++){
//     <Pokemon key={i} pokemonData={results} position={i}></Pokemon>
//     console.log(i)
//   }
// }

// const pokemonStandard = <Pokemon  pokemonData={results} ></Pokemon>;

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
      
      {/* <Pokemon key ={results} pokemonData={results}></Pokemon> */}
      {/* {pokemonData.results.map(pokemon =>(
          console.log(fetchPokemonData(pokemon))
      ))}  */}
  </div>


  )
}

export default PokemonGrid;
