import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      msg: 'mainState',
      counter: 1,
      nameList: [
        {
          id: 1,
          name: 'jack',
        },
      ],
    }
  },
  getters: {
    doubleCount: state => state.counter * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
    getName(state) {
      const res = state.nameList.find(item => item.id === 3)
      return res?.name ? 'jack' : 'rose'
    },
  },
  actions: {
    increment(state) {
      console.log(state)
      // state.counter += 1
    },
  },
})
