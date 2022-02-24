import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import PokemonGrid from './PokemonGrid';
import axios from 'axios';
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon?limit=200`);
      // console.log(result.data)
      
      setPokemonData(result.data);
      setIsLoading(false);
      // console.log(pokemonData);
      // setImageData(result.sprites);
    }
    fetchPokemon();
  },[])

// console.log(imageData);

  return (
    <div className="app">
      <div className="app_page">
       <Header />
      <PokemonGrid isLoading= {isLoading} pokemonData={pokemonData} />  
      </div>

    </div>
  );
}

export default App;
