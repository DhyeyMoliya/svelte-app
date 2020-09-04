<script>
  import { Route } from "svelte-router-spa";

  export let currentRoute;
  export let params = {};
</script>

<div class="box">
  <h1>Container 1</h1>
  <p>
    <a href="/">Page 1</a>
    <a href="/page2">Page 2</a>
    <a href="/page3">Page 3</a>
  </p>
  <Route {currentRoute} {params} />
</div>
