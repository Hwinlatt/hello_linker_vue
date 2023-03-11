<template>
  <div class="w-full">
    <SlideShowCarousel v-if="slideShows.length > 0" :data="slideShows"></SlideShowCarousel>
    <div class="mt-6">
      <h2 class="text-center text-xl"><i class="fa-solid fa-sun"></i> New Movies</h2>
      <div class="line-mf "></div>
      <CardCarousel :autoplay="2000" v-if="newMov.length > 0" :data="newMov"></CardCarousel>
    </div>
    <div>
      <DisplayAdsVue></DisplayAdsVue>
    </div>
    <div class="mt-6">
      <h2 class="text-center text-xl"><i class="fa-solid fa-fire-flame-curved text-red-500"></i> Popular Movies</h2>
      <div class="line-mf"></div>
      <CardCarousel :autoplay="3000" v-if="popularMov.length > 0" :data="popularMov"></CardCarousel>
    </div>
    <div>
      <DisplayAdsVue></DisplayAdsVue>
    </div>
    <div class="mt-6">
      <h2 class="text-center text-xl"><i class="fa-solid fa-circle-down text-indigo-600"></i> Most Download Movies</h2>
      <div class="line-mf"></div>
      <CardCarousel :autoplay="4000" v-if="mostDownMov.length > 0" :data="mostDownMov"></CardCarousel>
    </div>
  </div>
</template>

<script>
import SlideShowCarousel from '@/components/carousels/SlideShowCarousel.vue';
import axios from 'axios'
import CardCarousel from '@/components/carousels/CardCarousel.vue';
import { mapGetters } from 'vuex';
import DisplayAdsVue from './Ads/types/DisplayAds.vue';
export default {
  name: "HomeView",
  data() {
    return {
      slideShows: [],
      popularMov: [],
      newMov: [],
      mostDownMov: [],
    }
  },
  components: {
    SlideShowCarousel, CardCarousel, DisplayAdsVue
  },
  methods: {
    getHomePageData() {
      this.$store.dispatch('pageStatusChg', 'loading');
      axios.get(this.api + 'home', this.authHeader).then(r => {
        this.slideShows = r.data.slideShow;
        this.popularMov = r.data.popularMovies;
        this.newMov = r.data.newMovies;
        this.mostDownMov = r.data.mostDownloadMoves;
        this.$store.dispatch('pageStatusChg', 'show');
      })
    }
  },
  computed: {
    ...mapGetters(['api', 'authHeader'])
  },
  mounted() {
    this.$store.dispatch('activePageChg', { name: 'home' });
    this.getHomePageData();
  },
}
</script>

<style lang="scss" scoped></style>