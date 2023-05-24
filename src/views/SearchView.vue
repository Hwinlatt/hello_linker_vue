<template>
    <div class="w-full">
        <div class="mx-0.5">
            <div class=" mt-1 rounded-md shadow-sm flex">
                <button @click="this.$router.go(-1)" class="px-3 py-2 hover:bg-blue-400 rounded-full "><i
                        class="fa-solid fa-arrow-left-long "></i></button>
                <form action="" @submit.prevent="searchMovie" class="w-full flex">
                    <input v-model="searchKey" @keyup="suggestList"  type="search" 
                    class="block ml-2 flex-1  rounded-md border-0 py-1.5 px-2   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                                dark:outline-none dark:bg-slate-700 dark:ring-black dark:text-slate-300 dark:focus:ring-0 dark:border-0"
                    placeholder="Search Movie">
                </form>
            </div>
        </div>
        <div class=" mx-2 mt-2">
            <div class="flex  justify-between" v-if="history.length > 0">
                <h1 class="font-bold text-xl">Recent Search</h1>
                <button class="text-blue-700" @click="removeAllHistory()">Remove all</button>
            </div>
            <div class="flex  justify-between" v-else>
                <h2 class=" text-slate-500">No recent searches</h2>
            </div>
            <!-- History List  -->
            <div v-if="searchKey.length < 1">
                <ul>
                    <li v-for="(h, index) in history" :key="index"
                        class="px-2 cursor-pointer py-2 hover:bg-slate-500 rounded-md">
                        <div class=" flex justify-between items-center">
                            <div class="w-full" @click="searchMovie(h)">
                                <i class="fa-solid fa-clock-rotate-left mr-2"></i> {{ h }}
                            </div>
                            <i class="fa-solid fa-xmark block cursor-pointer" @click="removeHistory(index)"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Suggest List  -->
            <div v-else>
                <ul>
                    <li v-for="(h, index) in suggestHistoryLists" :key="index"
                        class="px-2 cursor-pointer py-2 hover:bg-slate-500 rounded-md">
                        <div class=" flex justify-between items-center">
                            <div class="w-full " @click="searchMovie(h)">
                                <i class="fa-solid fa-clock-rotate-left mr-2"></i> {{ h }}
                            </div>
                            <i class="fa-solid fa-xmark block cursor-pointer" @click="removeHistory(index)"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchView',
    data() {
        return {
            searchKey: '',
            history: [],
            suggestHistoryLists: [],
        }
    },
    methods: {
        searchMovie(key) {
            this.$store.dispatch('saveCache',{name:'lastMoviePage',data:1});
            console.log(this.$store.state.cache);
            if (!key) {
                key = this.searchKey.trim();
            }
            if (key.length > 1) {
                this.$router.push({ name: 'movieList', query: { s: key } });
                if (this.history.includes(key)) {
                    const index = this.history.indexOf(key);
                    if (index > -1) {
                        this.history.splice(index, 1);
                    }
                }
                this.history.unshift(key);
                this.saveHistory();
            }
        },
        removeHistory(index) {
            this.history.splice(index, 1);
            this.saveHistory()
        },
        removeAllHistory() {
            this.history = [];
            this.saveHistory();
        },
        suggestList(event) {
            let key = this.searchKey.trim();
            if (event.keyCode === 13 || event.which === 13) {
                this.searchMovie(key);
            }
            if (key.length < 1) {
                this.suggestHistoryLists = [];
                return;
            }
            this.suggestHistoryLists = this.history.filter(e => {
                return e.includes(key);
            })

        },
        saveHistory() {
            localStorage.setItem('searchHistory', JSON.stringify(this.history));
        }
    },
    mounted() {
        this.$store.dispatch('hideShowCtrl', [['bBar', false], ['navBar', false]]);
        this.$store.dispatch('activePageChg', { name: '', header: 'Search' });
        this.history = localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : [];
    },
    unmounted() {
        this.$store.dispatch('hideShowCtrl', [['bBar', true], ['navBar', true]]);
    },
}
</script>

<style lang="scss" scoped></style>