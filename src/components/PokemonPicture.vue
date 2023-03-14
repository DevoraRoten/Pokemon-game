<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" class="hidden-pokemon" :src="imgSrc" alt="">
        <img v-else class="fade-in" :src="imgSrc" alt="">
    </div>
   

</template>

<script>
import { booleanLiteral } from '@babel/types';


export default {
    props:{
        pokemonId:{
            type: Number,
            //default: 5,
            required: true
        },
        showPokemon: {
            type: booleanLiteral,
            required: true,
            default: false
        }

    },

    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}

</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    /*position: absolute;
    right: 40%;*/
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>