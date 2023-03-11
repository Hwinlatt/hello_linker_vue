<template>
    <div class="w-full">
        <div class=" sm:grid sm:grid-cols-12">
            <div class="hidden sm:block sm:col-span-3">
                <DisplayAdsVue />
            </div>
            <div class="sm:col-span-6">
                <div>
                    <InArticleAdsVue></InArticleAdsVue>
                </div>
                <div class="px-1 mt-4 mb-2">
                    <input @keyup="searchActors()" v-model="searchKeyActor" type="text"
                        class="w-full rounded-md h-8 px-2  sm:h-9 text-black   outline-none" placeholder="Search Actors">
                </div>
                <ul>
                    <li v-for="(actor, index) in actors"
                        class="px-3 hover:bg-slate-500 cursor-pointer border-b border-gray-600" :key="index">
                        <div @click="goFilterByActor(actor)" class="flex h-20   items-center justify-center">
                            <h1 class="text-lg font-semibold capitalize">{{ actor }}</h1>
                        </div>
                    </li>
                </ul>
                <div>
                    <InArticleAdsVue></InArticleAdsVue>
                </div>
            </div>
            <div class="hidden sm:block sm:col-span-2">
                <DisplayAdsVue />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
import DisplayAdsVue from '../Ads/types/DisplayAds.vue';
import InArticleAdsVue from '../Ads/types/InArticleAds.vue';
export default {
    name: 'ActorsList',
    data() {
        return {
            actors: [],
            searchKeyActor: "",
        }
    },
    components: {
        DisplayAdsVue, InArticleAdsVue
    },
    methods: {
        goFilterByActor(actor) {
            this.$router.push({ name: 'FilterByActor', params: { name: actor.toLowerCase() } })
        },
        getActorsList() {
            if (this.cache.actors_list.length > 0) {
                this.actors = this.cache.actors_list;
                return;
            }
            this.$store.dispatch('pageStatusChg', 'loading');
            axios.get(this.api + 'movies/actors', this.authHeader).then(r => {
                this.actors = r.data.sort();
                this.$store.dispatch('saveCache', { name: 'actors_list', data: r.data.sort() });
                this.$store.dispatch('pageStatusChg', 'show');
            })
        },
        searchActors(e) {
            if (this.searchKeyActor.length > 0) {
                this.actors = this.cache.actors_list.filter(e => {
                    if (e.includes(this.searchKeyActor)) {
                        return true;
                    }
                })
            } else {
                this.actors = this.cache.actors_list;
            }
        }
    },
    computed: {
        ...mapGetters(['api', 'authHeader']),
        ...mapState(['cache'])
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'actors' });
        setTimeout(() => {
            this.getActorsList();
        }, 100);
    },
}
</script>

<style lang="scss" scoped></style>