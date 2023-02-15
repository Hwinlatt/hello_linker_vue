<template>
    <div class="w-full">
        <div class="w-full relative  mr-3 text-sm my-2">
            <span v-if="$route.query.s" class="ml-4 text-md">Search Key - <i>{{ $route.query.s }}</i> |
                <router-link :to="{name:'movieList'}" class="text-blue-500">All</router-link>
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
        <MovieList class="clear-both" :status="status" :data="movies"></MovieList>
        <div class="flex justify-center mt-3">
            <v-pagination v-model="pagination.page" :pages="pagination.pageCount" :range-size="2" active-color="#DCEDFF"
                @update:modelValue="getMovies" />
        </div>
    </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'MovieView',
    data() {
        return {
            pagination: {
                pageCount: 1,
                page: 1
            },
            sortBy: "new_arrive",
            movies: [],
            status: ''
        }
    },
    components: {
        MovieList, VPagination
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
            } else {
                if (e != this.cache.lastMoviePage) {
                    window.scrollTo(0, 0);
                }
                this.$store.dispatch('saveCache', { name: 'lastMoviePage', data: e })
            }
            this.status = '';
            this.movies = [];
            axios.get(this.api + `movies?page=${e}&orderBy=${this.sortBy}&s=${this.searchKey}`, this.authHeader).then(r => {
                this.movies = r.data.data;
                this.pagination.pageCount = r.data.last_page;
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
        this.getMovies();
    },
}
</script>

<style lang="scss" scoped>

</style>