import { shallowMount } from "@vue/test-utils"
import  App  from "@/App.vue"

describe('App.vue', ()=>{
    test('debe hacer match con el snapshop',()=>{
        const wrapper = shallowMount(App)
        expect(wrapper.html()).toMatchSnapshot()
    })
})