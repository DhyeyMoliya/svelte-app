<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute, params;
</script>

<div class="box">
  <h1>Main Container</h1>
  <p>
    <a href="/container1">Container 1</a>
    <a href="/container2">Container 2</a>
  </p>
  <Route {currentRoute} {params} />
</div>
