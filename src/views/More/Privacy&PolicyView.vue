<template>
    <div class="container mx-auto p-1">
    <h2 class="text-3xl font-bold text-center">Privacy Policy</h2>
    <p class="mt-4 text-lg text-center text-gray-400">Last updated: [Date]</p>
    <p class="mt-4 text-lg text-center text-gray-400">Hello Linker ("us," "we," or "our") operates the Hello Linker website (the "Service"), dedicated to sharing links of Myanmar subtitle movies.</p>
    
    <div class="mt-8">
      <h3 class="text-2xl font-semibold">Information Collection and Use</h3>
      <p class="mt-4 text-lg text-gray-400">We collect and use personal data for the purpose of providing and improving our Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
    </div>
    
    <div class="mt-8">
      <h3 class="text-2xl font-semibold">Types of Data Collected</h3>
      <p class="mt-4 text-lg text-gray-400">While using our Service, we may collect certain personally identifiable information that can be used to contact or identify you ("Personal Data"). The types of Personal Data we may collect include:</p>
      <ul class="mt-4 text-lg text-gray-400 list-disc list-inside">
        <li>Email address: We may collect your email address if you choose to subscribe to our newsletter or contact us via email.</li>
        <li>Username: If you register an account on our website, we may collect a username for identification purposes.</li>
      </ul>
    </div>
    
    <div class="mt-8">
      <h3 class="text-2xl font-semibold">Usage Data</h3>
      <p class="mt-4 text-lg text-gray-400">We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
    </div>
    
    <div class="mt-8">
      <h3 class="text-2xl font-semibold">Cookies and Tracking Technologies</h3>
      <p class="mt-4 text-lg text-gray-400">We use cookies and similar tracking technologies to track the activity on our Service and collect certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. They help us improve the user experience and provide personalized features.</p>
      <p class="mt-4 text-lg text-gray-400">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
    </div>

    <!-- Add more sections of the Privacy Policy here -->

  </div>
</template>

<script>
    export default {
        name:'PrivacyPolicy',
        mounted () {
            this.$store.dispatch('activePageChg', { name: 'more', header:'Privacy & Policies' });
        },
    }
</script>

<style lang="scss" scoped>

</style>