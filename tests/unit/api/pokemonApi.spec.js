import pokemonApi from '@/api/pokemonApi'

describe('poquemonApi', ()=>{

    test('axios debe estar configurado con la api de pokemon',()=>{
       // console.log(pokemonApi)
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})