<script setup>
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import { ref, defineProps, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: true,
  },
});

const isLoading = ref(true);
const jobs = ref([]);

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // to stimulate loading
  try {
    const response = await axios.get("/api/jobs");
    console.log("API Response:", response.data); // Log the response data
    jobs.value = response.data;
  } catch (error) {
    console.error("API Error:", error); // Log any errors
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!--Show loading spinner while loading is true-->
      <div v-if="isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <!--Show job listings when loading is done-->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
