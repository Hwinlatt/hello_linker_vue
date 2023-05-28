<template>
    <div class="container mx-auto">
        <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="px-6 py-8">
                <h2 class="text-3xl font-bold text-center text-gray-900">About Us</h2>
                <p class="mt-4 text-lg text-center text-gray-700">Hello Linker is a website dedicated to sharing links
                    of Myanmar subtitle movies. Our mission is to provide a convenient platform for movie enthusiasts to
                    discover and access a wide range of movies with Myanmar subtitles.</p>
                <p class="mt-4 text-lg text-center text-gray-700">At Hello Linker, we believe that language should not
                    be a barrier to enjoying great movies. With our curated collection of movies and subtitles, users
                    can easily find and enjoy their favorite movies with accurate Myanmar subtitles.</p>
                <p class="mt-4 text-lg text-center text-gray-700">We strive to constantly update our movie database,
                    ensuring that our users have access to the latest and most popular movies with Myanmar subtitles.
                    Whether you are a fan of Hollywood blockbusters, international cinema, or local films, Hello Linker
                    has got you covered.</p>
                <p class="mt-4 text-lg text-center text-gray-700">In addition to providing movie links, we also offer a
                    community-driven platform where users can discuss and share their thoughts on movies. Join our
                    vibrant community and engage in meaningful conversations with fellow movie enthusiasts.</p>
                <p class="mt-4 text-lg text-center text-gray-700">Our user-friendly interface and search features make
                    it easy to navigate through our vast collection of movies. You can search for movies by title,
                    genre, or even specific actors and directors. Say goodbye to the hassle of searching for Myanmar
                    subtitles elsewhere!</p>
            </div>
            <div class="bg-gray-100 px-6 py-4">
                <p class="text-lg text-center text-gray-700">Visit us at <a href="https://hellolinker.net"
                        class="text-blue-600 hover:underline">hellolinker.net</a> and start exploring a world of movies
                    with Myanmar subtitles today!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    mounted () {
        this.$store.dispatch('activePageChg', { name: 'more', header:'About Us | Hello Movies' });
    },
}
</script>

<style lang="scss" scoped></style>