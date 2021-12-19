<script lang="ts" context="module">
import { parks } from "../../stores/parkstore";
import { setBackground} from "../../stores/globalstore";
setBackground("images/background.jpeg");
</script>
<div class="h-full flex flex-col mx-10 ">
<div class="border-b-2 border-b-accent w-full text-white text-2xl my-10">Parks</div>
<div class="flex flex-row flex-wrap">
{#each $parks || [] as park }
<div class="cursor-pointer relative shadow-2xl flex-grow flex flex-row text-white rounded-lg m-2 bg-panel my-3 w-full overflow-hidden md:my-5 lg:w-1/4">
    <a href={`/parks/${park.id}`}>
        <div class="w-full flex flex-col backdrop-filter backdrop-blur-sm absolute bottom-0 py-2 px-4">
            <h1 class="text-lg">{park.name}</h1>
            <h3>{park.state}</h3>
        </div>
        <img
        class="h-full w-full rounded-lg object-cover"
        src={`images/${park.image}`}
    />
    </a>
    </div>
{/each}
</div>
</div>