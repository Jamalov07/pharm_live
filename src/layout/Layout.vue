<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Intro from "../components/Intro/Intro.vue";
</script>

<template>
  <Header />
  <Intro />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style scoped></style>
