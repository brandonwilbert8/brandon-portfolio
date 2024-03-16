<script>
export default {
  name: 'Project',
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-1 gap-6 p-5 sm:mb-5 md:mb-5">
    <a href="https://github.com/brandonwilbert8/tweetapp-fe" target="_blank" class="hover:scale-105">
      <div class="h-full w-full rounded-md bg-gradient-to-r from-blue100 via-cyan-400 to-violet-600 p-1.5">
        <div class="flex h-full w-full bg-gray-50 dark:bg-black100 back">
          <div class="px-6 py-4 sm:py-3 rounded-lg space-y-2">
            <h2 class="text-xl sm:text-2xl font-custom text-gray-800 dark:text-neutral-300">Tweet App 🐤</h2>
            <p class="text-lg sm:text-xl py-3 md:py-0 text-gray-500 dark:text-neutral-400 font-light">Basically a home-made Twitter clone.</p>
            <div class="flex space-x-2 sm:text-sm text-xs">
              <p class="text-gray-500 dark:text-neutral-500 font-light">Tech-stack</p>
              <p class="text-gray-800 dark:text-neutral-500">|</p>
              <p class="font-light text-gray-800 dark:text-neutral-400">React.js, Spring Boot, MongoDB, AWS.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a href="https://github.com/brandonwilbert8/utilities-app" target="_blank" class="hover:scale-105">
      <div class="h-full w-full rounded-md bg-gradient-to-r from-blue100 via-cyan-400 to-violet-600 p-1.5">
        <div class="flex h-full w-full bg-gray-50 dark:bg-black100 back">
          <div class="px-6 py-4 sm:py-3 rounded-lg space-y-2">
            <h2 class="text-xl sm:text-2xl font-custom text-gray-800 dark:text-neutral-300">Utilities App 🛠️</h2>
            <p class="text-lg sm:text-xl py-3 md:py-0 text-gray-500 dark:text-neutral-400 font-light">Simple mobile application to boost everyday productivity.</p>
            <div class="flex space-x-2 sm:text-sm text-xs">
              <p class="text-gray-500 dark:text-neutral-500 font-light">Tech-stack</p>
              <p class="text-gray-800 dark:text-neutral-500">|</p>
              <p class="font-light text-gray-800 dark:text-neutral-400">React Native.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a href="https://github.com/brandonwilbert8/budget-tracker" target="_blank" class="hover:scale-105">
      <div class="h-full w-full rounded-md bg-gradient-to-r from-blue100 via-cyan-400 to-violet-600 p-1.5">
        <div class="flex h-full w-full bg-gray-50 dark:bg-black100 back">
          <div class="px-6 py-4 sm:py-3 rounded-lg space-y-2">
            <h2 class="text-xl sm:text-2xl font-custom text-gray-800 dark:text-neutral-300">Budget Tracker 💸</h2>
            <p class="text-lg sm:text-xl py-3 md:py-0 text-gray-500 dark:text-neutral-400 font-light">Cool budget tracking application that features savings planner. <br />In collaboration with Vincent La 👨‍💻</p>
            <div class="flex space-x-2 sm:text-sm text-xs">
              <p class="text-gray-500 dark:text-neutral-500 font-light">Tech-stack</p>
              <p class="text-gray-800 dark:text-neutral-500">|</p>
              <p class="font-light text-gray-800 dark:text-neutral-400">React Native, React.js, Express.js, MongoDB.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
