import { createStore } from 'vuex'

export default createStore({
  state: {
    pageStatus:'show', //loading , show
    activePage:'home',
    server:'https://member.hellolinker.net/',
    navHeader:'',
    showMovId:localStorage.getItem('showMovId') || '',
    newShowMovId:localStorage.getItem('newShowMovId') || '',
    security:{
      apiPassword : '@@##helloLinkerApiRequestAllowByApplication##@@'
    },
    cache:{
      lastMoviePage : 1
    },
  },
  getters: {
    authHeader: (state) => {
      return {
        headers:{
          'Accept': 'application/json',
          'Authorization': 'Bearer ',
          'Content-Type': 'multipart/form-data',
          'ApiPassword' : state.security.apiPassword
        }
      }
    },
    api:(state)=>{
      return state.server + 'api/'
    },
    imagePath:(state)=>{
      return state.server + 'storage/movie_photos/'
    }
  },
  mutations: {
  },
  actions: {
    activePageChg : ({state},value) =>{
      state.activePage = value.name;
      if (value.header) {
        state.navHeader = value.header;
      }else{
        state.navHeader = '';
      }
    },
    showMovIdChg : ({state},value) => {
      state.showMovId = value;
      localStorage.setItem('newShowMovId',value);
      state.newShowMovId = value;
    },
    pageStatusChg : ({state},value) => {
      state.pageStatus = value;
    },
    saveCache : ({state},value) => {
      if (value.name == 'lastMoviePage') {
        state.cache.lastMoviePage = value.data;
      }
    },
  },
  modules: {
  }
})
