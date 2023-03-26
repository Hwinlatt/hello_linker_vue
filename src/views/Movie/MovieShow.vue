<template>
    <div class="w-full sm:grid sm:grid-cols-12">
        <div class="sm:col-span-2">
            <DisplayAdsVue/>
        </div>
        <div class="sm:col-span-8">
            <!-- <div>
                <br><span class=" font-bold text-two-color text-2xl">Please Scroll Down
                    <div class="inline-block">
                        <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
                    </div>
                </span><br>
                <div class=" h-36 flex items-center justify-center bg-gray-500 w-full">
                    <InArticleAdsVue/>
                </div>
                Beauty is commonly described as a feature of objects that makes these objects pleasurable to perceive.
                Such objects include landscapes, sunsets, humans and works of art. Beauty, together with art and taste,
                is the main subject of aesthetics, one of the major branches of philosophy. As a positive aesthetic
                value, it is contrasted with ugliness as its negative counterpart.
                <br><span class=" font-bold text-two-color text-2xl">Please Scroll Down
                    <div class="inline-block">
                        <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
                    </div>
                </span><br>
                <div class=" h-36 flex items-center justify-center bg-gray-500 w-full">
                    <InArticleAdsVue/>
                </div>
                One difficulty in understanding beauty is because it has both objective and subjective aspects: it is
                seen as a property of things but also as depending on the emotional response of observers. Because of
                its subjective side, beauty is said to be "in the eye of the beholder".[2] It has been argued that the
                ability on the side of the subject needed to perceive and judge beauty, sometimes referred to as the
                "sense of taste", can be trained and that the verdicts of experts coincide in the long run. This would
                suggest that the standards of validity of judgments of beauty are intersubjective, i.e. dependent on a
                group of judges, rather than fully subjective or fully objective.
                <br><span class=" font-bold text-two-color text-2xl">Please Scroll Down
                    <div class="inline-block">
                        <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
                    </div>
                </span><br>
                <div class=" h-36 flex items-center justify-center bg-gray-500 w-full">
                    <InArticleAdsVue/>
                </div>
                Conceptions of beauty aim to capture what is essential to all beautiful things. Classical conceptions
                define beauty in terms of the relation between the beautiful object as a whole and its parts: the parts
                should stand in the right proportion to each other and thus compose an integrated harmonious whole.
                Hedonist conceptions see a necessary connection between pleasure and beauty, e.g. that for an object to
                be beautiful is for it to cause disinterested pleasure. Other conceptions include defining beautiful
                objects in terms of their value, of a loving attitude towards them or of their function.
            </div>
            <div class="px-1">
                <div class=" font-bold text-two-color text-2xl">Please Scroll Down
                    <div class="inline-block">
                        <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
                    </div>
                </div>
                {{ movie.description }}
            </div> -->
            <div class="my-6">
                <h1 class="text-xl font-bold">{{ movie.name }}</h1>
                <div class="w-full mt-12" id="playMovieContainer" v-html="movieContainer">

                </div>
            </div>
            <!-- <div class=" h-36 flex items-center justify-center bg-gray-500 w-full">
                <InArticleAdsVue/>
            </div> -->
            <div v-if="isLinkGet" class="mt-4">
                <table class=" table-auto w-full border-collapse border-gray-500 border">
                    <thead>
                        <tr>
                            <th class="border-gray-500 py-1 my-1 border"> Name</th>
                            <th class="border-gray-500 py-1 my-1 border">Link</th>
                        </tr>
                    </thead>
                    <tbody class="text-md" v-if="link.link">
                        <tr class="text-center">
                            <td class="border-gray-500 py-1 my-1 border">
                                <span v-if="link.link.includes('google')" class="">
                                    <i class="fa-brands fa-google-drive"></i> Google Drive
                                </span>
                                <span v-if="link.link.includes('mega')" class="">
                                    <i class="fa-solid fa-m"></i> Mega Drive
                                </span>
                            </td>
                            <td class="text-blue-700 border-gray-500 py-1 my-1 border">
                                <span class="cursor-pointer" @click="download(link.link + makeId(5), 5)"> <i
                                        class="fa-solid  fa-cloud-arrow-down animate-bounce"></i>
                                    Download</span>
                                <span class="mx-2 text-black dark:text-white">|</span>
                                <span v-if="isCanPlay(link.link)" class="cursor-pointer"
                                    @click="moviePlay(link.link)">
                                    <i class="fa-regular fa-circle-play"></i> Play
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="text-md" v-if="link.episodes">
                        <tr class="text-center" v-for="(l, index) in stringToArray(link.episodes, '|')" :key="index">
                            <td v-if="stringToArray(l, ',')[0]" class="border-gray-500 border">
                                {{ stringToArray(l,',')[0] }}
                            </td>
                            <td v-if="stringToArray(l, ',')[1]" class="text-blue-700 border-gray-500 border">
                                <span class="cursor-pointer" @click="download(stringToArray(l, ',')[1] + makeId(5), 5)">
                                    <i class="fa-solid  fa-cloud-arrow-down animate-bounce"></i>
                                    Download</span> <span class="mx-2 text-black dark:text-white">|</span>
                                <span v-if="isCanPlay(stringToArray(l, ',')[1])" class="cursor-pointer"
                                    @click="moviePlay(stringToArray(l, ',')[1])">
                                    <i class="fa-regular fa-circle-play"></i> Play
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="text-center mt-5">
                <button @click="getMovieLink()" class="btn-primary animate-bounce"> <i class="fa-solid fa-download"></i>
                    Download</button>
            </div>
        </div>
        <div class="sm:col-span-2">
            <DisplayAdsVue/>
        </div>
    </div>
    <ScreenFullAds v-if="showAds"></ScreenFullAds>
</template>

<script>
import axios from 'axios';
import ScreenFullAds from '@/views/Ads/ScreenFullAds.vue';
import usefulFunction from '@/assets/js/usefulFunction';
import { mapGetters, mapState } from 'vuex';
import InArticleAdsVue from '../Ads/types/InArticleAds.vue';
import DisplayAdsVue from '../Ads/types/DisplayAds.vue';
export default {
    name: 'MovieShow',
    components: {
        ScreenFullAds,
        // InArticleAdsVue,
        DisplayAdsVue
    },
    mixins: [usefulFunction],
    data() {
        return {
            movie: {},
            link: {},
            isLinkGet: false,
            showAds: false,
            movieContainer: ''
        }
    },
    methods: {
        getMovieLink() {
            let data = {
                id: this.movie.id,
                name: this.movie.name,
                trailer: this.movie.trailer,
            }
            axios.post(this.api + 'movies/get_link', data, this.authHeader).then(r => {
                this.link = r.data;
                this.isLinkGet = true;
                this.showFullScreenAds();
            })
        },
        getMovieInfo() {
            this.$store.dispatch('pageStatusChg', 'loading');
            axios.post(this.api + `movies/info/${this.showMovId}`, {}, this.authHeader).then(r => {
                this.$store.dispatch('pageStatusChg', 'show');
                this.movie = r.data.movie;
                this.$store.dispatch('activePageChg', { name: 'movies', header: r.data.movie.name });
            })
        },
        isCanPlay(link) {
            if (link.includes('google') && !link.includes('folders')) {
                return true;
            }
            return false;
        },
        download(link, count) {
            link = link.slice(0, -count);
            if (link.includes('google')) {
                link = this.googleDriveDownload(link);
            }
            this.showFullScreenAds();
            window.open(link);
        },
        moviePlay(link) {
            this.movieContainer = '';
            if (link.includes('google') && !link.includes('folders')) {
                this.movieContainer = this.googleDriveIframe(link);
            } else {
                'Cannot Direct Watch Movie'
            }
            let playMovieContainer = document.getElementById("playMovieContainer")
            playMovieContainer.scrollIntoView()
        },
        // Showing Full Screen Ads 
        showFullScreenAds() {
            this.showAds = false;
            setTimeout(() => {
                this.showAds = true;
            }, 10);
        }
    },
    computed: {
        ...mapGetters(['api', 'authHeader']),
        ...mapState(['showMovId']),
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'movies', header: 'Movie Name' });
        this.getMovieInfo();
    },
}
</script>

<style lang="scss" scoped>

</style>