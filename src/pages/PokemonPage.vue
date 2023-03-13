<template>
  <h1>¿Quién es este Pokemon?</h1>
  <PokemonPicture></PokemonPicture>
  <pokemon-options></pokemon-options>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions
  }

}

</script>

<style>

</style>