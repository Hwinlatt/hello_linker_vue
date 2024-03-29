import { createStore } from 'vuex'

export default createStore({
  state: {
    ads: {
      //*Make True To Show Ads on Production
      show: false,
      adClient: 'ca-pub-4711089720936751',
      displayAds: ['2434317999', '6565579201', '4222251810', '9318935328'],
      articleAds: ['4008516864', '7642396731'],
      inFeedAds: ['9516220725'],
    },
    //*Page Configs
    pageStatus: 'show', //loading , show
    activePage: 'home',
    server: 'https://member.hellolinker.net/',
    // server: 'http://127.0.0.1:8000/',
    navHeader: '',
    //*Ui Control
    bBar: true, //buttom bar
    navBar: true,
    showMovId: localStorage.getItem('showMovId') || '',
    newShowMovId: localStorage.getItem('newShowMovId') || '',
    security: {
      apiPassword: '$2a$12$6VOZchEjfIkZNDyJXWoAhuFNqTsxQHINnk0PhxvA4a2V9VtMvDhNO'
    },
    cache: {
      lastMoviePage: 1,
      actors_list: [],
      homePageData:{},
    },
  },
  getters: {
    authHeader: (state) => {
      return {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ',
          'Content-Type': 'multipart/form-data',
          'ApiPassword': state.security.apiPassword
        }
      }
    },
    api: (state) => {
      return state.server + 'api/'
    },
    imagePath: (state) => {
      return state.server + 'storage/movie_photos/'
    }
  },
  mutations: {
  },
  actions: {
    activePageChg: ({ state }, value) => {
      state.activePage = value.name;
      if (value.header) {
        document.title = value.header;
        state.navHeader = value.header;
      } else {
        state.navHeader = '';
        document.title = "Hello Linker"
      }
    },
    showMovIdChg: ({ state }, value) => {
      state.showMovId = value;
      localStorage.setItem('newShowMovId', value);
      state.newShowMovId = value;
    },
    pageStatusChg: ({ state }, value) => {
      state.pageStatus = value;
    },
    saveCache: ({ state }, value) => {
      if (value.name == 'lastMoviePage') {
        state.cache.lastMoviePage = value.data;
      } else if (value.name == 'actors_list') {
        state.cache.actors_list = value.data;
      }else if (value.name == 'homePage') {
       state.cache.homePageData = value.data; 
      }
    },
    hideShowCtrl: ({ state }, array) => {
      for (let i = 0; i < array.length; i++)  {
        if (array[i][0] == 'bBar') {
          state.bBar = array[i][1]
        }
        if (array[i][0] == 'navBar') {
          state.navBar = array[i][1]
        }
      }
    },
  },
  modules: {
  }
})
