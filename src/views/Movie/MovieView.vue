<template>
    <div class="w-full">
        <div class="w-full relative   mr-3 text-sm my-2">
            <span v-if="$route.query.s" class="ml-4 text-md">Search Key - <i>{{ $route.query.s }}</i> |
                <router-link :to="{ name: 'movieList' }" class="text-blue-500">All Movies</router-link>
            </span>
            <div class=" float-right">
                <i class="fa-solid fa-filter"></i>
                <select @change="getMovies(1)" v-model="sortBy"
                    class=" dark:bg-gray-900 p-1 rounded-md mx-1 active:bg-indigo-600 hover:outline hover:outline-indigo-500">
                    <option class="text-sm" value="new_arrive">New Arrive</option>
                    <option class="text-sm" value="popular">Popular</option>
                    <option class="text-sm" value="">Old</option>
                </select>
            </div>
        </div>
        <DisplayAdsVue></DisplayAdsVue>
        <MovieList class="clear-both" :status="status" :data="movies"></MovieList>
        <div class="flex justify-center mt-3">
            <vue-awesome-paginate :total-items="pagination.totalItems" v-model="currentPage"
                :items-per-page="pagination.perPage" :max-pages-shown="4" :on-click="getMovies" />
        </div>
    </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
import DisplayAdsVue from '../Ads/types/DisplayAds.vue';
export default {
    name: 'MovieView',
    data() {
        return {
            currentPage: 1,
            pagination: {
                perPage: 20,
                totalItems: 20,
            },
            sortBy: "new_arrive",
            movies: [],
            status: ''
        }
    },
    components: {
        MovieList, DisplayAdsVue
    },
    watch: {
        '$route.query': {
            handler: function (search) {
                this.getMovies();
            },
            deep: true,
            // immediate: true
        }
    },
    methods: {
        getMovies(e) {
            if (!e) {
                e = this.cache.lastMoviePage;
                this.currentPage = e;
            } else {
                if (e != this.cache.lastMoviePage) {
                    window.scrollTo(0, 0);
                }
                this.$store.dispatch('saveCache', { name: 'lastMoviePage', data: this.currentPage })
            }
            this.status = '';
            this.movies = [];
            axios.get(this.api + `movies?page=${e}&orderBy=${this.sortBy}&s=${this.searchKey}`, this.authHeader).then(r => {
                this.movies = r.data.data;
                this.pagination.pageCount = r.data.last_page;
                this.pagination.totalItems = r.data.total;
                this.pagination.perPage = r.data.per_page;
                this.pagination.page = r.data.current_page;
                if (r.data.data.length == 0) {
                    this.status = 'nothing';
                }
            })
        }
    },
    computed: {
        ...mapGetters(['api', 'authHeader']),
        ...mapState(['cache']),
        searchKey() {
            if (this.$route.query.s) {
                return this.$route.query.s;
            }
            return '';
        }
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'movies' });
        this.$store.dispatch('pageStatusChg', 'show');
        this.getMovies();
    },
}
</script>


<style lang="scss" scoped></style>