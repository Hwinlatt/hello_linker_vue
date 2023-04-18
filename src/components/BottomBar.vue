<template>
    <div class="bottomBar" v-if="bBar">
        <div  class=" fixed bottom-0 w-full h-14 border-t-gray-400 dark:bg-black bg-slate-800 text-white border-t   grid grid-cols-3">
        <router-link class="w-full block mt-1 ripple-bg-red-100" to="/">
            <div class="text-center">
                <i class="fa-solid fa-house" :class="{'text-two-color':activePage == 'home'}"></i><br>
                <small class="text-xs">Home</small>
            </div>
            <div v-if="activePage == 'home'" class="h-1 bg-blue-600 w-full"></div>
        </router-link>
        <router-link class="w-full block mt-1" :to="{name:'movieList'}">
            <div class="text-center">
                <i class="fa-solid fa-clapperboard" :class="{'text-two-color':activePage == 'movies'}"></i><br>
                <small class="text-xs">Movies</small>
            </div>
            <div v-if="activePage == 'movies'" class="h-1 bg-blue-600 w-full"></div>
        </router-link>
        <router-link class="w-full block mt-1" to="/collection">
            <div class="text-center">
                <i class="fa-solid fa-list" :class="{'text-two-color':activePage == 'collection'}"></i><br>
                <small class="text-xs">Collection</small>
            </div>
            <div v-if="activePage == 'collection'" class="h-1 bg-blue-600 w-full"></div>
        </router-link>
        <!-- <router-link class="w-full block mt-1" :to="{name:'actorsList'}">
            <div class="text-center">
                <i class="fa-solid fa-star" :class="{'text-two-color':activePage == 'actors'}"></i><br>
                <small class="text-xs">Actors</small>
            </div>
            <div v-if="activePage == 'actors'" class="h-1 bg-blue-600 w-full"></div>
        </router-link> -->
        <!-- <div>Account</div> -->
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'BottomBar',
    computed: {
        ...mapState(['activePage','bBar'])
    },
}

</script>

<style lang="scss" scoped>

</style>