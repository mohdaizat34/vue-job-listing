<script setup>
import Card from "./Card.vue";
import { RouterLink } from "vue-router";
import { VideoPlayer } from "vue-video-player";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our Vue jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </RouterLink>
        </Card>
        <Card>
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/jobs/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>

  <!-- video card -->

  <section class="py-4">
    <div class="text-center">
      <h1
        class="text-4xl font-extrabold text-green-700 sm:text-5xl md:text-6xl"
      >
        Video Demonstration
      </h1>
      <p class="my-4 text-xl text-green-900">
        The API will not be fetched on the website due to the free package hence
        the video demonstration.
      </p>
    </div>
  </section>

  <section class="py-4 mb-5 bg-blue-50">
    <div
      class="container-xl lg:container m-auto flex justify-center items-center text-center"
    >
      <VideoPlayer src="/src/assets/video/video-project.mp4" autoplay={true}
      class="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-60" controls
      loop={true} volume={0.6} onMounted={/*...*/} onReady={/*...*/}
      onPlay={/*...*/} onPause={/*...*/} onEnded={/*...*/} onSeeking={/*...*/}
      />
    </div>
  </section>
</template>
