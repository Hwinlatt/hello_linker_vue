<template>
    <div class="w-full">
        <MovieList  :status="status" :data="movies"></MovieList>
        <div class="flex justify-center mt-3">
            <v-pagination v-model="pagination.page" :pages="pagination.pageCount" :range-size="2" active-color="#DCEDFF"
                @update:modelValue="getMovieByCategory" />
        </div>
    </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue'
import axios from 'axios';
import { mapGetters } from 'vuex';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
    name: 'CategoryMovieList',
    data() {
        return {
            movies: [],
            pagination: {
                pageCount: 1,
                page: 1
            },
            status:'',
        }
    },
    components: {
        MovieList,VPagination
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
                this.pagination.pageCount = r.data.last_page;
                this.pagination.page = r.data.current_page;
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