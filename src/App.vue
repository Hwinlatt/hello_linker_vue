<template>
  <NavBar :header="navHeader"></NavBar>
  <div  class="w-full">
    <router-view></router-view>
  </div>
  <div v-if="pageStatus == 'loading'" class="w-full h-full backdrop-blur-sm bg-black/10 fixed top-0  flex justify-center items-center">
    <sync-loader  :color="'#5446E3'" ></sync-loader>
  </div>
  <BottomBar></BottomBar>
</template>

<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import NavBar from './components/NavBar.vue';
import BottomBar from './components/BottomBar.vue'
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    NavBar, BottomBar, SyncLoader
  },
  computed: {
    ...mapState(['navHeader', 'pageStatus']),
  },
}
</script>

<style lang="scss" scoped>

</style>