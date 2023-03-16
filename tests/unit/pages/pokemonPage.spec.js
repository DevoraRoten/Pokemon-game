import PokemonPage from '@/pages/PokemonPage'
import { mount, shallowMount } from '@vue/test-utils'
import { mockPokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallowMount(PokemonPage)
    })

    test('debe hacer match con el snapshot', ()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar a la funcion mixPokemon al montar pokemonPage', ()=>{
        const mixPokemonSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonSpy).toHaveBeenCalled()
    })

    test('debe hacer match con el snapshot cuando cargan los pokemones', ()=>{
       // console.log(mockPokemons)
        const wrapper = shallowMount(PokemonPage, {
            
            data() {
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        }) 
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions',()=>{
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        }) 
        //PokemonPicture debe existir
        const pokemonPictures = wrapper.find('pokemon-picture-stub').exists()
        expect(pokemonPictures).toBeTruthy()
        //console.log(pokemonPictures)
        //PokemonOptions debe existir
        const pokemonOptions = wrapper.find('pokemon-options-stub').exists()
        expect(pokemonOptions).toBeTruthy()

        //PokemonPicture attribute pokemonId=1
        const pokeId = wrapper.find('pokemon-picture-stub').attributes('pokemonid')
        expect(pokeId).toBe('1')
        //PoquemonOption atrubute pokemons toBe true
        const pokeOptions = wrapper.find('pokemon-options-stub').attributes('pokemons')
        expect(pokeOptions).toBeTruthy()
        

    })

    test('prueba para el checkAnswer', async()=>{
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        }) 
        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto!!!`)

        await wrapper.vm.checkAnswer(2)
       // console.log(wrapper.vm.message)
        expect(wrapper.vm.message).toBe(`Eleccion Incorrecta, era ${mockPokemons[0].name}`)

    })
})