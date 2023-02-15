<template>
    <div class="w-full">
        <div class=" sm:grid sm:grid-cols-12">
            <div class="hidden sm:block sm:col-span-3">
                For Ads
            </div>
            <ul class="sm:col-span-6">
                <li @click="goFilterByCategory(category)"  v-for="(category,index) in categories" class=" h-20 px-3 hover:bg-slate-500 cursor-pointer border-b border-gray-600"
                    :key="index">
                    <div class="flex  h-full items-center justify-center">
                        <h1 class="text-lg font-semibold capitalize">{{ category }}</h1>
                    </div>
                </li>
            </ul>
            <div class="hidden sm:block sm:col-span-3">
                For Ads
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: 'CategoryList',
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        goFilterByCategory(category) {
            this.$router.push({name:'FilterByCategory',params:{name: category.toLowerCase()}})
        },
        getCategoryList(){
            this.$store.dispatch('pageStatusChg','loading');
            axios.get(this.api+'movies/category',this.authHeader).then(r=>{
                this.categories = r.data.sort();
                this.$store.dispatch('pageStatusChg','show');
            })
        }
    },
    computed: {
        ...mapGetters(['api','authHeader'])
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'category' });
        this.getCategoryList();
    },
}
</script>

<style lang="scss" scoped>

</style>