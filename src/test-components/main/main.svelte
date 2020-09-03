<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { createCounter } from "./main.store";
  import { slide } from "svelte/transition";
  export let countDown = 10;
  let counter = createCounter(countDown);
  let dispatcher = createEventDispatcher();
  counter.subscribe((value) => {
    dispatcher("countChanged", value);
  });
</script>

<style src="./main.scss">

</style>

<main>
  {(console.log('[MainTestComponent] Counter : ', $counter), '')}
  {#if $counter > 0}
    <h1 in:slide out:slide>Disappearing in {$counter}!</h1>
  {/if}
</main>
