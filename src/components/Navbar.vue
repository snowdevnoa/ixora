<template>
		<p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
		<nav class="flex flex-row justify-center bg-white p-[2rem]">
			<RouterLink to="/">Logo</RouterLink>
			<RouterLink to="/helloworld">Go to Hello World</RouterLink>
		</nav>
</template>

<script>

</script>

