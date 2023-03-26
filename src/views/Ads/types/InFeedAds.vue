<template>
    <div class="w-full" v-if="ads.show">
        <ins class="adsbygoogle" style="display:block; min-width:320px; height:250px;" data-ad-format="fluid"
            data-ad-layout-key="+1m+s4-1b-27+96" :data-ad-client="ads.adClient" :data-ad-slot="randomSlotId"></ins>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'inFeedAds',
    computed: {
        ...mapState(['ads']),
        randomSlotId() {
            const slotId = Math.floor(Math.random() * this.ads.inFeedAds.length);
            return this.ads.inFeedAds[slotId];
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