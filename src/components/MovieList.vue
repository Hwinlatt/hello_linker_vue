<template>
    <div class="w-full md:grid grid-cols-12  mt-2 ">
        <div class="col-span-2">
            <DisplayAds />
        </div>
        <div class="col-span-8">
            <div class="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5" v-if="data.length > 0">
                <div v-for="(movie, index) in data" :key="index" class="m-1 cursor-pointer p-3"
                    @click="goToMovieInfo(movie.id)">
                    <div class="relative w-full overflow-hidden rounded">
                        <img v-if="movie.image" :src="imagePath + movie.image" alt=""
                            class="hover:contrast-125 h-36  w-full object-fill transition hover:scale-110" srcset="">
                        <img v-else :src="movie.image_link" alt=""
                            class="hover:contrast-125 h-36  w-full object-fill transition hover:scale-110" srcset="">
                        <div class=" absolute bottom-0 right-0 bg-black/60 text-slate-200 p-1  rounded-l-md">
                            <span><i v-for="index in 4" :key="index" class="fa-solid fa-star"
                                    :class="{ 'text-yellow-500': index <= movie.rating }"></i></span>
                            <span class="ml-1"><i class="fa-solid fa-eye"></i> <small class="text-sm">{{
                                movie.view_count
                            }}</small></span>
                        </div>
                    </div>
                    <p class="truncate ... mt-1 text-center">
                        {{ movie.name }}
                    </p>
                </div>
            </div>
            <!-- Movie Loading Preview  -->
            <div class="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-5" v-else-if="status != 'nothing'">
                <div v-for="index in 20" :key="index" class="m-1 cursor-pointer p-3">
                    <div class="relative w-full overflow-hidden h-32">
                        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div class="animate-pulse flex space-x-4">
                                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-2 bg-slate-700 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                        </div>
                                        <div class="h-2 bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="truncate ... mt-1 text-center">
                        loading ...
                    </p>
                </div>
            </div>
            <div v-if="status == 'nothing'" class="w-full mt-8 flex justify-center items-center">
                <div class="text-center">
                    <img class=" w-64 mb-3" src="/img/notfound.svg" alt="">
                    <h1 class=" text-xl font-bold">There is Nothing To Show</h1>
                </div>
            </div>
        </div>
        <div class="col-span-2">
            <DisplayAds />
        </div>
    </div>
</template>

<script>
import DisplayAds from '@/views/Ads/types/DisplayAds.vue';
import { mapGetters } from 'vuex'
// import InArticleAdsVue from '@/views/Ads/types/InArticleAds.vue';
export default {
    name: "MovieList",
    props: {
        data: {
            type: Array,
        },
        status: {
            type: String,
            default: '',
        }
    },
    components: {
        DisplayAds
    },
    methods: {
        goToMovieInfo(mId) {
            this.$router.push({ name: 'movieInfo', params: { id: mId } })
        }
    },
    computed: {
        ...mapGetters(['imagePath'])
    },
}
</script>

<style lang="scss" scoped></style>