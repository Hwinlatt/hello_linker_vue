<template>
    <div class="w-full  min-h-screen">
        <div class=" h-36 bg-gray-400 flex items-center justify-center mb-3 ">
            <DisplayAdsVue/>
        </div>
        <span class=" font-bold text-two-color text-2xl">Please Scroll Down
            <div class="inline-block">
                <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
            </div>
        </span><br>
        <p>The moving images of a film are created by photographing actual scenes with a motion-picture camera, by
            photographing drawings or miniature models using traditional animation techniques, by means of CGI and computer
            animation, or by a combination of some or all of these techniques, and other visual effects.

            Before the introduction of digital production, series of still images were recorded on a strip of chemically
            sensitized celluloid (photographic film stock), usually at the rate of 24 frames per second. The images are
            transmitted through a movie projector at the same rate as they were recorded, with a Geneva drive ensuring that
            each frame remains still during its short projection time. A rotating shutter causes stroboscopic intervals of
            darkness, but the viewer does not notice the interruptions due to flicker fusion. The apparent motion on the
            screen is the result of the fact that the visual sense cannot discern the individual images at high speeds, so
            the impressions of the images blend with the dark intervals and are thus linked together to produce the illusion
            of one moving image. An analogous optical soundtrack (a graphic recording of the spoken words, music and other
            sounds) runs along a portion of the film exclusively reserved for it, and was not projected.

            Contemporary films are usually fully digital through the entire process of production, distribution, and
            exhibition.</p>
        <div class="h-36 bg-gray-400 flex items-center justify-center  mb-3">
            <DisplayAdsVue/>
        </div>
        <span class=" font-bold text-two-color text-2xl">Please Scroll Down
            <div class="inline-block">
                <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
            </div>
        </span><br>
        <p>The name "film" originally referred to the thin layer of photochemical emulsion[2] on the celluloid strip that
            used to be the actual medium for recording and displaying motion pictures.

            Many other terms exist for an individual motion-picture, including "picture", "picture show", "moving picture",
            "photoplay", and "flick". The most common term in the United States is "movie", while in Europe "film" is
            preferred. Archaic terms include "animated pictures" and "animated photography".

            "Flick" is in general a slang term, first recorded in 1926. It originates in the verb flicker, owing to the
            flickering appearance of early films.[3]

            Common terms for the field in general include "the big screen", "the silver screen", "the movies", and "cinema";
            the last of these is commonly used, as an overarching term, in scholarly texts and critical essays. In early
            years, the word "sheet" was sometimes used instead of "screen".</p>
        <div class=" h-36 bg-gray-400 flex items-center justify-center  ">
            <DisplayAdsVue/>
        </div>
        <span class=" font-bold text-two-color text-2xl">Please Scroll Down
            <div class="inline-block">
                <i class="fa-solid  fa-arrow-down animate-bounce text-two-color"></i>
            </div>
        </span><br>
        <p>The name "film" originally referred to the thin layer of photochemical emulsion[2] on the celluloid strip that
            used to be the actual medium for recording and displaying motion pictures.

            Many other terms exist for an individual motion-picture, including "picture", "picture show", "moving picture",
            "photoplay", and "flick". The most common term in the United States is "movie", while in Europe "film" is
            preferred. Archaic terms include "animated pictures" and "animated photography".

            "Flick" is in general a slang term, first recorded in 1926. It originates in the verb flicker, owing to the
            flickering appearance of early films.[3]

            Common terms for the field in general include "the big screen", "the silver screen", "the movies", and "cinema";
            the last of these is commonly used, as an overarching term, in scholarly texts and critical essays. In early
            years, the word "sheet" was sometimes used instead of "screen".</p>
        <div class=" h-36 bg-gray-400 flex items-center justify-center mt-3 ">
            <DisplayAdsVue/>
        </div>

        <div v-if="isCanContinue" class="text-center my-1">
            <button v-if="count == 0" class="btn-primary" @click="goToShowMovie()">Continue</button>
            <div class="text-md" v-else>
                <i class="fa-solid fa-spinner animate-spin text-two-color"></i> Please Wait <span>{{ count }}</span>
            </div>
        </div>
        <div v-else class="text-center my-2">
            <span>Please <span @click="this.$router.go(-1)" class="text-blue-600">go back</span> and click <span
                    class=" font-bold">Get Link</span> again!</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import $ from 'jquery'
import DisplayAdsVue from './types/DisplayAds.vue';
export default {
    name: 'FourAds.vue',
    components: {
        DisplayAdsVue,
    },
    data() {
        return {
            count: 10,
        }
    },
    methods: {
        goToShowMovie() {
            this.$router.push({ name: 'showMovie' })
            if (this.showMovId != '') {
                localStorage.setItem('showMovId', this.showMovId);
            }
        },
        continueBtnCount() {
            let canContinue = setInterval(() => {
                this.count--;
                if (this.count <= 0) {
                    this.count = 0;
                    clearInterval(canContinue);
                }
            }, 1000);
        }
    },
    computed: {
        ...mapState(['showMovId', 'newShowMovId']),
        isCanContinue() {
            if (this.showMovId == this.newShowMovId) {
                return true;
            }
            return false;
        }
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: '', header: 'Show Ads' });
        this.continueBtnCount();
        $('.bottomBar').addClass('hidden')

    },
    unmounted() {
        $('.bottomBar').removeClass('hidden')
    },
}
</script>

<style  scoped></style>