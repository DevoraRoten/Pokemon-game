<template>
  <h1 v-if="!pokemon"> Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"></PokemonPicture>
    <pokemon-options :pokemons="pokemonArr" @selected="checkAnswer($event)"></pokemon-options>
    <div v-if="showAnswer">
      <h2 >{{ message }}</h2>
      <button @click="nuevoJuego">Nuevo juego</button>
    </div>
    
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from '@/helpers/getPokemonOptions';

//console.log(getPokemonOptions())

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,

  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr= await getPokemonOptions()
      console.log(this.pokemonArr)
      const resp = Math.floor(Math.random()*4)
      this.pokemon = this.pokemonArr[resp]
      
    },
    checkAnswer(pokemonId){
      this.showPokemon=true
      this.showAnswer=true
      if(pokemonId===this.pokemon.id){
        this.message=`Correcto!!! `
      }else{
        this.message=`Eleccion Incorrecta, era ${this.pokemon.name}`
      }
      console.log('pokemon seleccionado', pokemonId)
    },
    nuevoJuego(){
      this.pokemonArr= []
      this.pokemon= null
      this.showPokemon= false,
      this.showAnswer= false,
      this.message= ''
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
    console.log(this.pokemon)
  }

}

</script>

<style>

</style>