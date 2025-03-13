<script setup>
    import { ref, watchEffect } from 'vue';
    import { useRouter } from 'vue-router';
    
    const theme = ref(localStorage.getItem('theme') || 'dark');
    const router = useRouter();
    
    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme.value);
    };

    const goToLoginPage = () => {
        router.push({ name: 'Login' })
    }

    const goToSignupPage = () => {
        router.push({ name: 'Signup' })
    }
    
    watchEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme.value);
    });
</script>

<template>
    <div :class="theme" class="min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300 py-24">
		<button @click="toggleTheme" class="absolute right-2 top-4 p-2 border rounded shadow-md text-sm xl:text-md">
			{{ theme === 'light' ? 'Dark' : 'Light' }} Mode
		</button>
		
		<div class="flex flex-col md:flex-row items-center max-w-4xl w-full gap-8">
			<div class="text-center md:text-left flex-1">
				<h1 class="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">Welcome to MeepX</h1>
				<p class="mt-4 text-md md:text-lg text-gray-700 dark:text-gray-300">
					The best way to chat with your friends and stay connected.
				</p>
				<div class="mt-6">
					<button @click="goToSignupPage" class="bg-teal-600 text-white font-semibold py-3 px-6 rounded shadow-md hover:bg-teal-700">Signup</button>
					<button @click="goToLoginPage" class="ml-3 border border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400 py-3 px-6 rounded shadow-md hover:bg-teal-100 dark:hover:bg-teal-800">Login</button>
				</div>
			</div>
			<div class="flex-1">
				<img src="@/assets/no-room.svg" alt="Welcome Illustrator">
			</div>
		</div>
    </div>
</template>
  
<style>
    .dark {
        background-color: #1e293b;
        color: #e2e8f0;
    }
    .light {
        background-color: #f8fafc;
        color: #1e293b;
    }
</style>
  