<template>
    <div class="w-full mt-1 sm:grid sm:grid-cols-12">
        <div class=" sm:col-span-2">

        </div>
        <div class="sm:col-span-8">
            <div class="w-full" v-html="movie.trailer"></div>
            <div class="grid sm:grid-cols-5 mt-2">
                <div class="sm:col-span-2 ">
                    <img v-if="movie.image" class="w-full" :src="imagePath + movie.image" alt="Image" srcset="">
                    <img class="w-full" v-else :src="movie.image_link" alt="Image" srcset="">
                </div>
                <div class="m-2 sm:col-span-3 items-center flex justify-center">
                    <div class="w-full">
                        <h1 class="mt-3 mb-1 sm:hidden text-center text-xl text-two-color">Movie Info</h1>
                        <div class="line-mf mb-2"></div>
                        <div class="overflow-hidden bg-white dark:bg-black shadow sm:rounded-lg">
                            <div class="border-t border-gray-200 dark:border-slate-800">
                                <dl>
                                    <div
                                        class="bg-gray-50 dark:bg-slate-900  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500 dark:text-slate-400">Actors</dt>
                                        <dd class="mt-1 text-sm dark:text-white text-gray-900 sm:col-span-2 sm:mt-0">{{
                                            movie.actors }}</dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Director</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{{
                                            movie.director }}</dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Studio</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{{
                                            movie.studio }}</dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Release Date</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{{
                                            movie.released_at }}</dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Movie Types</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                            <div class="w-100 flex flex-wrap" v-if="movie.type">
                                                <div @click="categorySearch(t)"
                                                    v-for="(t, index) in stringToArray(movie.type, ',')" :key="index"
                                                    class="p-1 cursor-pointer rounded bg-gradient-to-r dark:text-white from-indigo-700 dark:to-slate-900  backdrop-blur-sm text-sm mb-1 mr-1 font-sans  text-dark">
                                                    {{ t }}
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Rating</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                            <span><i v-for="index in 4" :key="index" class="fa-solid fa-star"
                                                :class="{ 'text-yellow-500': index <= movie.rating }"></i></span>
                                        </dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Views</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                            {{ movie.view_count }}
                                        </dd>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-slate-900 border-t border-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm  font-medium text-gray-500 dark:text-slate-400">Downloads</dt>
                                        <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{{
                                            movie.download_count }}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3">
                <h1 class="mt-3 mb-2 text-xl font-bold">Description</h1>
                <InArticleAdsVue />
                <div
                    class="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                    <button @click="movie_desc_show('eng')"
                        :class="[description.type == 'eng' ? description.active : description.notActive]">
                        Eng
                    </button>

                    <button @click="movie_desc_show('mm')"
                        :class="[description.type == 'mm' ? description.active : description.notActive]">
                        မြန်မာ
                    </button>
                </div>
                <p v-if="movie.description"
                    class="dark:bg-gradient-to-r  dark:text-white dark:from-black bg-black/30 backdrop-blur-md dark:to-black p-2 rounded">
                    <span v-if="description.type == 'mm'">
                        <!-- {{ stringToArray(movie.description, '|')[0] }} -->
                        {{ movie.mm_description }}
                    </span>
                    <span v-if="description.type == 'eng'">
                        {{ movie.description }}
                    </span>
                </p>
            </div>
            <DisplayAdsVue />
            <div class=" my-2 text-center">
                <button v-if="count == 0" @click="showMovIdStore(movie.id)"
                    class="py-2 px-3 animate-bounce text-white bg-gradient-to-r cursor-pointer from-indigo-700 to-pink-500 rounded-lg active:ring-2 hover:ring active:from-indigo-800 active:to-pink-800 hover:from-indigo-600 hover:to-pink-600">
                    <i class="fa-solid fa-link "></i> Get Link</button>
                <button v-else class="btn-primary">
                    <i class="fa-solid fa-spinner animate-spin"></i>
                    Please Wait <span>{{ count }}</span>
                </button>
            </div>
        </div>
        <div class=" mt-10  sm:col-span-12">
            <h1 class="text-center text-xl font-bold">Random Movies</h1>
            <div class="line-mf"></div>
            <MovieList :data="randomMovies"></MovieList>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import MovieList from '@/components/MovieList.vue';
import usefulFunction from '@/assets/js/usefulFunction';
import { mapGetters } from 'vuex';
import DisplayAdsVue from '../Ads/types/DisplayAds.vue';
import InArticleAdsVue from '../Ads/types/InArticleAds.vue';
export default {
    name: 'MovieInfo',
    components: {
        MovieList, DisplayAdsVue, InArticleAdsVue
    },
    mixins: [usefulFunction],
    data() {
        return {
            movie: {},
            randomMovies: [],
            count: 5,
            description: {
                type: 'eng',
                active: 'inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none',
                notActive: `inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400`
            }
        }
    },
    watch: {
        '$route.params': {
            handler: function () {
                this.getMovieInfo();
            },
            deep: true,
            // immediate: true
        }
    },
    methods: {
        showMovIdStore(mId) {
            this.$store.dispatch('showMovIdChg', mId);
            this.$router.push({ name: 'fourAds' })
        },
        getMovieInfo() {
            this.$store.dispatch('pageStatusChg', 'loading');
            axios.post(this.api + `movies/info/${this.$route.params.id}`, {}, this.authHeader).then(r => {
                this.movie = r.data.movie;
                this.$store.dispatch('activePageChg', { name: 'movies', header: this.movie.name });
                this.$store.dispatch('pageStatusChg', 'show');
                this.getRandomMovie(this.movie.type);
                this.generatingLink();
                window.scrollTo(0, 0);
            })
        },
        getRandomMovie(type) {
            axios.get(this.api + `movies/random/${type}/10`, this.authHeader).then(r => {
                this.randomMovies = r.data;
            })
        },
        categorySearch(type) {
            this.$router.push({ name: 'FilterByCategory', params: { name: type } });
        },
        generatingLink() {
            this.count = 5;
            let getLinkCount = setInterval(() => {
                this.count--;
                if (this.count <= 0) {
                    clearInterval(getLinkCount);
                    this.count = 0;
                }
            }, 1000);
        },
        // Change Movie Description Language 
        movie_desc_show(type) {
            this.description.type = type;
        }
    },
    mounted() {
        this.getMovieInfo();
        this.$store.dispatch('activePageChg', { name: 'movies', header: 'Loading...' });
    },
    computed: {
        ...mapGetters(['api', 'authHeader', 'imagePath']),
    },
}
</script>

<style lang="scss" scoped></style>