<template>
    <div class="w-full">
        <MovieList  :status="status" :data="movies"></MovieList>
        <div class="flex justify-center mt-3">
            <vue-awesome-paginate :total-items="pagination.totalItems" v-model="currentPage"
                :items-per-page="pagination.perPage" :max-pages-shown="4" :on-click="getMovieByCategory" />
        </div>
    </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue'
import axios from 'axios';
import { mapGetters } from 'vuex';
import { VueAwesomePaginate } from 'vue-awesome-paginate';
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
    name: 'CategoryMovieList',
    data() {
        return {
            currentPage: 1,
            movies: [],
            pagination: {
                perPage: 20,
                totalItems: 20,
            },
            status:'',
        }
    },
    components: {
        MovieList,VueAwesomePaginate
    },
    methods: {
        getMovieByCategory(e) {
            this.movies = [];
            if (!e) {
                e = 1;
            }
            window.scrollTo(0, 0);
            let data = {
                actor : this.$route.params.name
            }
            axios.post(this.api + `movies/actors/search?page=${e}`,data, this.authHeader).then(r => {
                this.movies = r.data.data;
                this.pagination.totalItems = r.data.total;
                this.pagination.perPage = r.data.per_page;
                this.currentPage = r.data.current_page;
                if (r.data.data.length == 0) {
                    this.status = 'nothing';
                }
            })
        }
    },
    computed: {
        ...mapGetters(['api', 'authHeader'])
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'actors', header: this.$route.params.name  });
        this.getMovieByCategory();
        
    },
}
</script>

<style lang="scss" scoped>

</style>