<script>
  import { slide } from "svelte/transition";
  export let length = 1;
</script>

{#each new Array(length) as item, i}
  <div transition:slide>Item {i}</div>
{/each}
