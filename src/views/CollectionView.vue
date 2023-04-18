<template>
    <div class="w-full grid grid-cols-2 sm:grid-cols-3 mt-1">
        <div v-for="(list,index) in lists" :key="index" @click="goTo(list)"
            class="h-24 rounded-md bg-gradient-to-tr  flex items-center justify-center  m-1 p-2 relative" :class="list.color">
            <img :src="list.img" class="h-24 w-full" alt="">
            <div
                class=" absolute flex justify-center items-center font-bold text-white  h-full w-full text-2xl bg-black/10 backdrop-blur-sm p-2 rounded-md">
                {{ list.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CollectionView',
    data() {
        return {
            lists: [
                {
                    text: 'Actors',
                    img: '/img/actors.svg',
                    routeName:'actorsList',
                    color:'from-indigo-600 to-pink-500',
                },
                {
                    text: 'Category',
                    img: '/img/list.svg',
                    routeName:'category',
                    color:'from-red-600 to-red-100',
                },
                {
                    text: 'Series',
                    img: '/img/netflix.svg',
                    routeName:'comingSoon',
                    color:'from-pink-600 to-pink-500',
                },
            ]
        }
    },
    methods: {
        goTo(list) {
            this.$router.push({name:list.routeName})
        }
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'collection' });
    },
}
</script>

<style lang="scss" scoped></style>