<script lang="ts">
	import '../app.css';
	const loggedIn = false;
</script>

<div class="background">
	<nav class="h-full mb-5 flex flex-row justify-between items-center pl-5">
		<a href="/"> <div class="trek-badge p-5 bg-accent text-primary rounded-b-md ml-5">Trek</div></a>
		<div
			class="text-left border-accent border-b-2 hidden lg:flex md:flex flex-row justify-between items-center">
			<div class="cursor-pointer nav-item mr-8">Parks</div>
			<div class="cursor-pointer nav-item mr-8">Campsites</div>
			<div class="cursor-pointer nav-item mr-8">Login</div>
			{#if loggedIn}
				<div class="cursor-pointer nav-item mr-8">Profile</div>
				<div class="cursor-pointer nav-item mr-8">Logout</div>
			{/if}
		</div>
	</nav>
	<slot />
</div>
