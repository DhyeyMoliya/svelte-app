<script>
  import Main from "./main/main.svelte";
  import Test1 from "./test1.svelte";

  let arr = [1, 2, 3];

  function add() {
    arr = [...arr, arr.length + 1];
  }

  function remove() {
    arr = arr.slice(0, arr.length - 1);
  }
</script>

<Main
  on:countChanged={(event) => console.log('[TestComponent] Count Changed : ', event.detail)}
  countDown={5} />

<button on:click={add}>Add</button>
<button on:click={remove}>Remove</button>

<Test1 {arr} on:add={add} on:remove={remove} />
