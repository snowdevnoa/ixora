<template>
	<main>
		<h1>Hello App!</h1>
		<p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
		<nav class="flex flex-col">
			<RouterLink to="/">Go to home</RouterLink>
			<RouterLink to="/helloworld">Go to Hello World</RouterLink>
		</nav>

		<RouterView />
	</main>
</template>

<style scoped></style>
