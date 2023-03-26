<template>
    <div class="w-full sm:grid sm:grid-cols-12">
        <div class="sm:block sm:col-span-3">
            <DisplayAdsVue />
        </div>
        <div class="sm:col-span-6">
            <div>
                <InFeedAdsVue></InFeedAdsVue>
            </div>
            <ul>
                <li v-for="(category, index) in categories"
                    class="px-3 hover:bg-slate-500 cursor-pointer border-b border-gray-600" :key="index">
                    <div @click="goFilterByCategory(category)" class="flex h-20   items-center justify-center">
                        <h1 class="text-lg font-semibold capitalize">{{ category }}</h1>
                    </div>
                </li>
            </ul>
        </div>
        <div class="sm:block sm:col-span-2">
            <DisplayAdsVue />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import DisplayAdsVue from '../Ads/types/DisplayAds.vue';
import InFeedAdsVue from '../Ads/types/InFeedAds.vue';
export default {
    name: 'CategoryList',
    data() {
        return {
            categories: [],
        }
    },
    components: {
        DisplayAdsVue,InFeedAdsVue
    },
    methods: {
        goFilterByCategory(category) {
            this.$router.push({ name: 'FilterByCategory', params: { name: category.toLowerCase() } })
        },
        getCategoryList() {
            this.$store.dispatch('pageStatusChg', 'loading');
            axios.get(this.api + 'movies/category', this.authHeader).then(r => {
                this.categories = r.data.sort();
                this.$store.dispatch('pageStatusChg', 'show');
            })
        }
    },
    computed: {
        ...mapGetters(['api', 'authHeader'])
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'category' });
        this.getCategoryList();
    },
}
</script>

<style lang="scss" scoped></style>