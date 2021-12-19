<script lang="ts" context="module">
import { parks } from "../../stores/parkstore";
import { setBackground} from "../../stores/globalstore";
setBackground("images/background.jpeg");
</script>
<div>
{#each $parks || [] as park }
    <a href={`/parks/${park.id}`}><div>{park.parkName}</div></a>
{/each}
</div>