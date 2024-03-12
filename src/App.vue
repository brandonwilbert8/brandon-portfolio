<script setup>
import Name from './components/Name.vue';
import Message from './components/Message.vue'; //
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
      activeTab: 'home',
    };
  },
  created() {
    if (this.$route.path !== '/home') {
      this.$router.push('/home');
    }
  },
};
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="container mx-auto px-5 md:max-w-screen-md w-full h-screen">
      <header class="sm:flex sm:items-center sm:px-4 sm:py-3 mt-10 md:mt-14">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
          <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block text-blue100 hover:text-indigo-500 focus:text-blue100 focus:outline-none">
              <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 gap-5 ml-1">
          <router-link to="/home" :class="{ 'text-blue100': activeTab === 'home', 'text-gray-800': activeTab !== 'home', 'font-light': activeTab !== 'home' }" class="block px-2 py-1 font-semibold rounded hover:bg-blue-100 text-xl" @click="activeTab = 'home'">Home</router-link>
          <router-link to="/about" :class="{ 'text-blue100': activeTab === 'about', 'text-gray-800': activeTab !== 'about', 'font-light': activeTab !== 'about' }" class="block px-2 py-1 font-semibold rounded hover:bg-blue-100 text-xl" @click="activeTab = 'about'">About</router-link>
          <router-link to="/project" :class="{ 'text-blue100': activeTab === 'project', 'text-gray-800': activeTab !== 'project', 'font-light': activeTab !== 'project' }" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-blue-100 sm:mt-0 sm:ml-2 text-xl" @click="activeTab = 'project'">Projects</router-link>
          <router-link to="/contact" :class="{ 'text-blue100': activeTab === 'contact', 'text-gray-800': activeTab !== 'contact', 'font-light': activeTab !== 'contact' }" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-blue-100 sm:mt-0 sm:ml-2 text-xl" @click="activeTab = 'contact'">Contact</router-link>
        </nav>
      </header>
      <div class="p-6 text-left" v-if="activeTab !== 'home'">
        <Name />
        <Message />
        <hr class="border-t-2 border-gray-300 mt-4" />
      </div>
      <div class="h-[66vh] sm:h-[535px]">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>