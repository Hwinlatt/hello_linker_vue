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
                    <div>
                        <h1 class="mt-3 mb-1 text-center text-xl text-two-color">Movie Info</h1>
                        <div class="line-mf mb-2"></div>
                        <table class=" border-collapse border-2  border-indigo-600 m-auto text-sm">
                            <tbody>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">Actors</td>
                                    <td class="border border-indigo-600 px-4 py-2">{{ movie.actors }}</td>
                                </tr>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">Director</td>
                                    <td class="border border-indigo-600 px-4 py-2">{{ movie.director }}</td>
                                </tr>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">Studio</td>
                                    <td class="border border-indigo-600 px-4 py-2">{{ movie.studio }}</td>
                                </tr>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">Released Date</td>
                                    <td class="border border-indigo-600 px-4 py-2">{{ movie.released_date }}</td>
                                </tr>
                                <tr v-if="movie.type">
                                    <td class="border border-indigo-600 px-4 py-2">Movie Type</td>
                                    <td class="border border-indigo-600 px-4 py-2">
                                        <span @click="categorySearch(t)"
                                            v-for="(t, index) in stringToArray(movie.type, ',')" :key="index"
                                            class="p-1 rounded bg-gradient-to-r dark:text-white from-blue-700 dark:to-black  backdrop-blur-sm text-sm mb-1 mr-1 font-sans  text-dark">
                                            {{ t }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">Rating</td>
                                    <td class="border border-indigo-600 px-4 py-2">
                                        <span><i v-for="index in 4" :key="index" class="fa-solid fa-star"
                                                :class="{ 'text-yellow-500': index <= movie.rating }"></i></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">View</td>
                                    <td class="border border-indigo-600 px-4 py-2">{{ movie.view_count }}</td>
                                </tr>
                                <tr>
                                    <td class="border border-indigo-600 px-4 py-2">Total Download</td>
                                    <td class="border border-indigo-600 px-4 py-2">{{ movie.download_count }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="p-3">
                <h1 class="mt-3 mb-2 text-xl font-bold">Description</h1>
                <InArticleAdsVue/>
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
                    <span v-if="stringToArray(movie.description, '|').length > 1">
                        <span v-if="description.type == 'mm'">
                            {{ stringToArray(movie.description, '|')[0] }}
                        </span>
                        <span v-if="description.type == 'eng'">
                            {{ stringToArray(movie.description, '|')[1] }}
                        </span>
                    </span>
                    <span v-else>
                        {{ movie.description }}
                    </span>
                </p>
            </div>
            <DisplayAdsVue/>
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
        MovieList,DisplayAdsVue,InArticleAdsVue
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