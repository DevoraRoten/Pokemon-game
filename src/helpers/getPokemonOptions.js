import pokemonApi from '../api/pokemonApi'

export const getPokemons = ()=>{
    const pokeArray= Array.from(Array(650))
    return pokeArray.map((_, index) => index+1)
}

 const getPokemonOptions = async()=>{
    const mixedPoke= getPokemons().sort(()=>Math.random()-0.5)
    const pokemons = await getPokemonNames(mixedPoke.splice(0,4))
    
    return pokemons 
}

export const getPokemonNames = async([a,b,c,d]=[])=>{
    const PromiseArr =[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    
    const [p1, p2, p3, p4] = await Promise.all(PromiseArr)

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]

}
/*
const pokemonSelected= ()=>{
    const elegido = Math.floor(Math.random()*4)
    console.log(`el elegido es: ${elegido}`)

}*/


export default getPokemonOptions