<script lang="ts">
	import '../app.css';
</script>

<div class="background">
	<nav class="mb-5 flex flex-row justify-between items-center pl-5">
		<div class="trek-badge p-5 bg-accent text-primary rounded-b-md ml-5">Trek</div>
		<div class="text-left border-accent border-b-2 hidden lg:flex md:flex flex-row justify-between items-center">
			<div class="cursor-pointer nav-item mr-8">Parks</div>
			<div class="cursor-pointer nav-item mr-8">Campsites</div>
			<div class="cursor-pointer nav-item mr-8">Profile</div>
            <div class="cursor-pointer nav-item mr-8">Login</div>
            <div class="cursor-pointer nav-item mr-8">Logout</div>
		</div>
	</nav>
	<div class="mt-5 flex flex-col h-full justify-center">
		<div class="py-24 px-5 login-banner flex flex-row flex-wrap justify-between bg-secondaryt">
			<div class="max-w-md flex flex-col text-white p-5">
				<h1 class="text-white text-4xl mb-5">Find Your Trail.</h1>
                <p class="text-white">Camping is fun, getting lost isn’t. Join a community of explorers & find photos, reviews, and exact locations for even the most remote campsites.</p>
			</div>
			<div class="login-box rounded bg-primaryt mx-5 p-5">
                <div class="w-full mb-5">
                    <input class="mb-5 border-b border-b-stone-200 w-full bg-transparent" placeholder="Email" />
                    <input class="mb-5 border-b border-b-stone-200 w-full bg-transparent" placeholder="Password"/>
                </div>
                <div>
                    <button class="w-full rounded px-5 py-2 bg-accent">LOGIN</button>
                    <div class="flex flex-row justify-end mt-5">
                        <p class="text-white mr-3">Don't have an account?</p>
                        <p class="font-bold text-accent">Sign Up</p>
                    </div>
                </div>
                </div>
			<div />
		</div>
	</div>
</div>
