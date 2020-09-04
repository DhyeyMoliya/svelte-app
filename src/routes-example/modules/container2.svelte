<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  export let params = {};
</script>

<div class="box">
  <h1>Container 2</h1>
  <p>
    <a href="/container2">Page 1</a>
    <a href="/container2/page2">Page 2</a>
  </p>
  <Route {currentRoute} {params} />
</div>
