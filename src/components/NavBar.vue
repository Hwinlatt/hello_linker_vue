<template>
    <nav class=" sticky top-0 z-50 w-full" v-if="navBar">
        <div class="flex h-12 dark:bg-black shadow-sm shadow-gray-400 bg-slate-800 text-white w-full items-center justify-between">
            <div class="flex items-center mx-2"  v-if="header.length == 0">
                <img src="/img/linklogo-circle.png" class=" w-10 h-10" alt="" srcset="">
                <h1 class="text-2xl dark:text-two-color font-bold ml-2 ">Hello Linker</h1>
            </div>
            <div class="flex items-center mx-2" v-else>
                <button @click="goToBack()" class="px-3 py-2 hover:bg-blue-400 rounded-full "><i class="fa-solid fa-arrow-left-long "></i></button>
                <h1 class="text-lg capitalize  ml-2">{{ header }}</h1>
            </div>
            <div class="mx-2">
                <router-link :to="{name:'searchMovie'}"><i class="fa-solid cursor-pointer fa-magnifying-glass searchInputBtn"></i></router-link>
            </div>
        </div>
        <!-- <div class="m-1">
            <input @keypress.enter="searchMovie()" type="search" v-model="searchKey" class="w-full searchInput dark:bg-slate-700 dark:placeholder:text-slate-200 px-1 rounded-md border-0 outline-none p-2 focus:shadow-mds hidden dark:text-white" placeholder="Search Movies">
        </div> -->
    </nav>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    name: 'NavBar',
    data() {
        return {
            searchKey: ''
        }
    },
    methods: {
        goToBack() {
            this.$router.go(-1);
        },
        searchMovie(){
            if (this.searchKey.length > 1) {
                this.$router.push({name:'movieList',query:{s:this.searchKey}})
            }else{
                this.$router.push({name:'movieList'});
            }
        }
    },
    computed: {
        ...mapState(['navBar'])
    },
    props: {
        header: {
            type: String,
            default: ''
        },
    },
}
</script>

<style lang="scss" scoped>

</style>