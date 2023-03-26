<template>
    <div class="w-full" v-if="ads.show">
        <ins class="adsbygoogle" style="display:block" :data-ad-client="ads.adClient" :data-ad-slot="randomSlotId"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'DisplayAds',
    computed: {
        ...mapState(['ads']),
        randomSlotId(){
            const slotId = Math.floor(Math.random() * this.ads.displayAds.length);
            return this.ads.displayAds[slotId];
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