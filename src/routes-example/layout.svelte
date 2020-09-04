<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<style>
  :global(.box) {
    border: 1px solid gray;
    padding: 1rem;
  }
</style>

<div class="box">
  <h1>Layout</h1>
  <Router {routes} />
</div>
