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
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { VueAwesomePaginate } from 'vue-awesome-paginate';
export default {
    name: 'CategoryMovieList',
    data() {
        return {
            movies: [],
            currentPage: 1,
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
                category : this.$route.params.name
            }
            axios.post(this.api + `movies/category/search?page=${e}`,data, this.authHeader).then(r => {
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
        this.$store.dispatch('activePageChg', { name: 'category', header: this.$route.params.name  });
        this.getMovieByCategory();
        
    },
}
</script>

<style lang="scss" scoped>

</style>