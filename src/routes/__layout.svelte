<script lang="ts" context="module">
import '../app.css';
import { pageBackground, setBackground } from "../stores/globalstore";
const loggedIn = false;
</script>

<div class="background" style={`background: url('${$pageBackground}') no-repeat center center fixed; background-size: cover`}>
	<nav class="mb-5 flex flex-row justify-between items-center pl-5">
		<a href="/"> <div class="trek-badge p-5 bg-accent text-primary rounded-b-md ml-5">Trek</div></a>
		<div
			class="p-2 rounded-tl-md rounded-bl-md text-left bg-primaryt hidden lg:flex md:flex flex-row justify-between items-center">
			<a class="cursor-pointer nav-item mr-8" href="/parks">Parks</a>
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
