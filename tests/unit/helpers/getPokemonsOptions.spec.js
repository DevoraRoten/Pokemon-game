import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions";

describe('getPoquemosOptions.js', ()=>{
    test('el array de pokemones debe ser un array de numeros del 1 al 650',()=>{
        const pokemons =  getPokemons()
      //  console.log(pokemons)
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[350]).toBe(351)
        expect(pokemons[649]).toBe(650)

    })
    test('debe retornar un arraglo de 4 elementos con mombres de los pokemones', async()=>{
        const pokemons = await getPokemonNames([1,2,3,4])
        //console.log(pokemons)
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])

    })
    test('debe retornar un arreglo con los numeros mezclados', async()=>{
        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number) 
            },

            {
                name: expect.any(String),
                id: expect.any(Number)  
            },

            {
                name: expect.any(String),
                id: expect.any(Number)  
            },

            {
                name: expect.any(String),
                id: expect.any(Number) 
            }
          ])

    })
})