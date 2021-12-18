<script lang="ts">
import Landing from '../components/landing.svelte';
interface User {
  firstName: string
  lastName: string
  role: string
}

const user = {firstName: 'Charles', lastName: 'Xavier', role: 'Professor' }
</script>
<Landing/>