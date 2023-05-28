<template>
    <div class="mt-2 p-1">
        <ul
            class="text-sm font-medium sm:text-center text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <router-link :to="{name:'about'}">
                <li class="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-lg">
                    <i class="fa-solid fa-circle-info"></i> About Us
                </li>
            </router-link>
            <router-link :to="{name:'contact'}">
                <li class="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-lg">
                <i class="fa-solid fa-id-badge"></i> Contact Us
            </li>
            </router-link>
            <router-link :to="{name:'privacy&policy'}">
                <li class="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-lg">
                    <i class="fa-solid fa-shield-halved"></i> Privacy & Policies
            </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MorePage',
    data() {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('activePageChg', { name: 'more' });
    },
}
</script>

<style lang="scss" scoped></style>