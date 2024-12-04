<template>
	<p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
	<nav
		class="bg-white p-[2rem] flex flex-col space-y-4 justify-center items-center lg:flex-row lg:space-x-[82px]  lg:space-y-0"
	>
		<RouterLink to="/">About</RouterLink>
		<RouterLink to="/">Gallery</RouterLink>
		<RouterLink
			to="/"
			class="flex justify-center items-center"
		>
			<p
				id="logo-text"
				class="tracking-[0.5rem] text-[2rem] font-normal"
			>
				<span class="text-[var(--scarlet-900)]">i</span>xora
			</p>
			<p>by</p>
			<img
				src="../assets/ixora_logo.png"
				width="100px"
				class="ml-[-0.75rem]"
			/>
		</RouterLink>
		<RouterLink to="/">Services</RouterLink>
		<RouterLink to="/">
			<svg
				width="55"
				height="36"
				viewBox="0 0 55 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				id="map"
			>
				<g clip-path="url(#clip0_554_1285)">
					<path
						d="M36.3284 14.3933L36.4867 14.7098L36.8031 15.1845L41.3919 22.6215C41.7084 23.2544 42.6578 23.5709 43.2907 23.0962C43.449 22.938 43.6072 22.7797 43.7654 22.6215L48.3542 14.2351C48.6707 13.6022 48.9871 12.3363 48.9871 11.7034C48.8289 8.06397 45.8225 5.21576 42.1831 5.21576C38.7019 5.05753 35.6955 7.90574 35.5372 11.5451C35.5372 12.4945 35.8537 13.6022 36.3284 14.3933Z"
						stroke="black"
						stroke-width="1.65714"
						stroke-miterlimit="10"
					/>
					<path
						d="M42.3413 13.2858C43.5648 13.2858 44.5566 12.294 44.5566 11.0705C44.5566 9.84704 43.5648 8.85522 42.3413 8.85522C41.1178 8.85522 40.126 9.84704 40.126 11.0705C40.126 12.294 41.1178 13.2858 42.3413 13.2858Z"
						stroke="black"
						stroke-width="1.65714"
						stroke-miterlimit="10"
					/>
					<path
						d="M45.1895 20.5647C47.7212 21.0394 49.4618 22.147 49.4618 23.4129C49.4618 25.1535 46.2971 26.5776 42.3413 26.5776C38.3854 26.5776 35.2207 25.1535 35.2207 23.4129C35.2207 22.147 37.1195 20.8812 39.6513 20.5647"
						stroke="black"
						stroke-width="1.65714"
						stroke-miterlimit="10"
					/>
					<path
						d="M14.5502 27.7488L3.34654 34.151V8.5425L14.5502 2.14038M14.5502 27.7488L27.3545 34.151M14.5502 27.7488V2.14038M27.3545 34.151L38.5582 27.7488V26.2939M27.3545 34.151V8.5425M27.3545 8.5425L38.5582 2.14038V5.77799M27.3545 8.5425L14.5502 2.14038"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_554_1285">
						<rect
							width="55"
							height="34.9206"
							fill="white"
							transform="translate(0 0.539795)"
						/>
					</clipPath>
				</defs>
			</svg>
		</RouterLink>
		<RouterLink
			to="/"
			class="bg-[linear-gradient(-63deg,var(--periwinkle-600),var(--scarlet-300))] text-white px-[12px] py-[15px] rounded-lg uppercase font-bold min-[1220px]:absolute min-[1220px]:right-[100px]"
			id="book"
			>Book Now</RouterLink
		>
	</nav>
</template>

<style scoped>
a:not(#book) {
	color: black;
	font-weight: 600;
}

a:hover:not(#book) {
	color: var(--scarlet-900);
}

#map:hover path {
	stroke: var(--scarlet-900);
}

/* Animations & Transitions */

#book{
	transition: all 500ms ease-in-out; 
}

#book:hover {
    background-image: linear-gradient(-65deg, var(--periwinkle-600), var(--scarlet-400));
    color: white;
    padding: 12px 17px;
}
</style>
