<template>
    <Carousel :transition="1000" :wrapAround="true" :pauseAutoplayOnHover="true" :itemsToScroll="2"  :autoplay="autoplay" :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="(movie, index) in data" :key="index">
            <div class="carousel__item">
                <div class="w-full cursor-pointer" @click="goToMovieInfo(movie.id)">
                    <img v-if="movie.image" :src="imagePath + movie.image"
                        class="w-full md:h-52 sm:h-48   h-32 object-cover object-top" alt="">
                    <img v-else :src="movie.image_link" class="w-full sm:h-48 md:h-52  h-32 object-cover object-top" alt="">
                    <h1 class="text-sm mt-1 truncate ...">{{ movie.name }}</h1>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import { mapGetters } from 'vuex'

export default defineComponent({
    name: 'CardCarousel',
    props: {
        data: {
            type: Array,
        },
        autoplay:{
            type:Number,
            default:0
        }
    },
    methods: {
        goToMovieInfo(mId) {
            this.$router.push({name:'movieInfo',params:{id:mId}})
        }
    },
    computed: {
        ...mapGetters(['imagePath'])
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 3,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
    }),
})
</script>
