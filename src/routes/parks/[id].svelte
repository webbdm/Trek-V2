<script lang="ts" context="module">
    import { onMount,onDestroy } from 'svelte';
    import { setBackground } from "../../stores/globalstore";
    import { parks } from "../../stores/parkstore";
    setBackground("https://prowebbcore-client.s3.amazonaws.com/gsm");
    const p = ['photo.jpeg','gsm.jpg','background.jpeg'];
</script>

<div class="w-full border-t-2 border-t-accent flex flex-col">
<div class="h-full flex flex-row w-full">
    <div class="h-100 flex flex-col justify-between w-3/4">
        <div class="mt-20 mb-12 w-3/4 rounded-tr-md rounded-br-md text-white flex flex-col bg-primaryt p-4">
            <h1 class="text-2xl mb-1">{$parks[0].parkName}</h1>
            <h1 class="text-xl mb-2">{$parks[0].state}</h1>
            <p>Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America’s most visited national park.</p>
            <div class="flex flex-row justify-end">
                <button class="bg-accent p-1 px-2 font-sm text-primary rounded mt-4">Read More</button>
            </div>
        </div>
        <div class="bg-primaryt mt-10 w-36 text-white px-5 py-2 rounded"><a href="/parks">Back to Parks</a></div>
    </div>
    <!-- <div class="mt-1 p-2 flex flex-col justify-start items-center backdrop-blur-sm h-100 w-1/4 overflow-hidden">
        <h1 class="text-white my-4 text-xl mb-1">Parks Nearby</h1>
        {#each p as i}
            <img class="m-2 rounded" src="../../images/{i}"/>
        {/each}
    </div> -->
</div>
</div>