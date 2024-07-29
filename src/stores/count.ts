import {defineStore} from 'pinia'
export const useCountStore = defineStore('count',{
  actions:{
    add(value:number){
      this.count += value
    }
  },
  state(){
    return {
      count:6
    }
  },
  getters:{

  }
})