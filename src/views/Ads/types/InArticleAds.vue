<template>
    <div class="w-full" v-if="ads.show">
        <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article"
            data-ad-format="fluid" :data-ad-client="ads.adClient" :data-ad-slot="randomSlotId"></ins>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'InArticleAds',
    computed: {
        ...mapState(['ads']),
        randomSlotId() {
            const slotId = Math.floor(Math.random() * this.ads.articleAds.length);
            return this.ads.articleAds[slotId];
        }
    },
    mounted() {
        if (this.ads.show) {
            try {
                // eslint-disable-next-line no-undef
                (adsbygoogle = window.adsbygoogle || []).push({})
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>