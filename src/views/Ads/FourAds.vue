<template>
    <div class="w-full  min-h-screen">
        <div class=" h-28 bg-gray-400 flex items-center justify-center mb-1 ">
            <DisplayAdsVue/>
        </div>
        <div class="h-28 bg-gray-400 flex items-center justify-center">
            <DisplayAdsVue/>
        </div>
        <div v-if="isCanContinue" class="text-center my-2">
            <button v-if="count == 0" class="btn-primary" @click="goToShowMovie()">Continue</button>
            <div class="text-md" v-else>
                <i class="fa-solid fa-spinner animate-spin text-two-color"></i> Please Wait <span>{{ count }}</span>
            </div>
        </div>
        <div v-else class="text-center my-2">
            <span>Please <span @click="this.$router.go(-1)" class="text-blue-600">go back</span> and click <span
                    class=" font-bold">Get Link</span> again!</span>
        </div>
        <div class=" h-28 bg-gray-400 flex items-center justify-center  ">
            <DisplayAdsVue/>
        </div>
        <div class=" h-28 bg-gray-400 flex items-center justify-center mt-1 ">
            <DisplayAdsVue/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DisplayAdsVue from './types/DisplayAds.vue';
export default {
    name: 'FourAds.vue',
    components: {
        DisplayAdsVue,
    },
    data() {
        return {
            count: 5,
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
        this.$store.dispatch('hideShowCtrl',[['bBar',false]]);
        this.continueBtnCount();

    },
    unmounted() {
        this.$store.dispatch('hideShowCtrl',[['bBar',true]]);
    },
}
</script>

<style  scoped></style>