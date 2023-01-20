<script>
    export let align = "text-left";
    export let small = false;
  </script>
  
  <h1
    class:text-2xl="{small}"
    class="uppercase font-medium {align}">
    <slot />
  </h1>