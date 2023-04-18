<template>
    <div class="w-full flex items-center justify-center">
        <div class="text-center">
        <img class=" h-72" src="/img/coming.svg" alt="">
        <h1 class="text-lg text-center ">Coming Soon</h1>
        <span class="text-center mt-6 inline-block text-blue-700" @click="this.$router.go(-1)">Back</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'404View',
        mounted () {
            this.$store.dispatch('activePageChg',{name:''});
        },
    }
</script>

<style lang="scss" scoped>

</style>