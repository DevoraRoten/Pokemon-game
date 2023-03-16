
import PokemonOptions from '@/components/PokemonOptions'
import { shallowMount } from '@vue/test-utils'
import { mockPokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions.vue components', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper= shallowMount(PokemonOptions,{
            props:{
                pokemons: mockPokemons
            }
        })

    })
    test('Debe hacer match con el snapshop', ()=>{

        expect(wrapper.html()).toMatchSnapshot()
    })
    test('muestra los 4 pokemones', ()=>{
       const liTags = wrapper.findAll('li')
        
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('ivysaur')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')

    })
    test('emitir el evento selected y pokemon.id',()=>{
        const [li1, li2, li3,li4] = wrapper.findAll('li')
        li1.trigger('click')
       expect(wrapper.emitted('selected')[0]).toEqual([1])
       li2.trigger('click')
       expect(wrapper.emitted('selected')[1]).toEqual([2])
       li3.trigger('click')
       expect(wrapper.emitted('selected')[2]).toEqual([3])
       li4.trigger('click')
       expect(wrapper.emitted('selected')[3]).toEqual([4])
       
    })
})