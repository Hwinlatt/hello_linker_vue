<template>
    <div class="screenFullAds z-50 fixed  top-0 w-full h-screen bg-gray-600" :class="{ 'hidden': isClosed }">
        <div class="m-1">
            <div class="text-end">
                <button v-if="count == 0" @click="closeAds()"
                    class=" bg-white shadow-md text-black font-bold shadow-gray-400 w-8 h-8 rounded-full"><i
                        class="fa-solid fa-xmark p-2 "></i></button>
                <button v-else class=" bg-white shadow-md text-black font-bold shadow-gray-400 w-8 h-8 rounded-full">{{
                    count }}</button>
            </div>
            <div class="w-full">
                <DisplayAdsVue />
                <InArticleAdsVue />
            </div>
        </div>
    </div>
</template>

<script>
import DisplayAdsVue from './types/DisplayAds.vue';
import InArticleAdsVue from './types/InArticleAds.vue';
export default {
    name: 'ScreenFullAds',
    components: {
        DisplayAdsVue, InArticleAdsVue
    },
    data() {
        return {
            count: 3,
            isClosed: false
        }
    },
    methods: {
        startCount() {
            let time = setInterval(() => {
                this.count--;
                if (this.count == 0) {
                    clearInterval(time);
                }
            }, 1000);
        },
        closeAds() {
            this.isClosed = true;
        }
    },
    mounted() {
        this.startCount();
    },
}
</script>

<style lang="scss" scoped></style>