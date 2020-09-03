<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  export let arr = [];
  const dispatcher = createEventDispatcher();
  function change(type) {
    dispatcher(type);
  }
</script>

<style>
  .total {
    margin: 1rem 1rem 0 1rem;
  }
  .item {
    padding: 1rem 2rem;
    box-shadow: 0 0 5px 2px lightgray;
    margin: 1rem 1rem;
    border-radius: 5px;
  }
  .link {
    font-size: 1rem;
    cursor: pointer;
    color: darkblue;
    user-select: none;
    margin-left: 1rem;
  }
  .link:hover {
    text-decoration: underline;
  }
</style>

<h3 class="total">
  Total : {arr.length}
  <span on:click={() => change('add')} class="link">+ Add</span>
  <span on:click={() => change('remove')} class="link">- Remove</span>
</h3>

{#each arr as item, i}
  <div transition:slide class="item">Item {i + 1}</div>
{/each}
