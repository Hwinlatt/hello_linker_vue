<template>
    <Carousel>
        <Slide v-for="(slide, index) in data" :key="index">
            <div class="carousel__item cursor-pointer" @click="goTo(slide.link)">
                <div class="w-full relative">
                    <img v-if="slide.image" :src="slide.image" class="w-full h-48  object-top object-cover sm:h-96">
                    <img v-else :src="slide.image_link" class="w-full h-48  object-top object-cover sm:h-96">
                    <div class="absolute w-full bottom-0 ">
                        <h1
                            class="inline-block backdrop-blur-md bg-black/50 p-2 rounded-lg text-lg text-white truncate ...">
                            {{ slide.title }}</h1>
                        <p class="text-md hidden md:block backdrop-blur-md md:bg-black/50 p-4 h-32 overflow-auto scrollbar-hide">
                            {{ slide.description }}
                        </p>
                    </div>
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
    name: 'SlideShowCarousel',
    props: {
        data: {
            type: Array,
        },
    },
    methods: {
        goTo(link) {
            window.location.href = link
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    computed: {
        ...mapGetters(['imagePath'])
    },
})
</script>

<style>
.carousel__item {
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    color: white;
    background: gray;
    border-radius: 100%;
    /* border: 1px solid white; */
}
</style>