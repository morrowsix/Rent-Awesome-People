<script>
  import { slide } from "svelte/transition";
  import Button from "$lib/components/Button.svelte";
  export let title = "Title";
  export let open = false;
  function expand() {
    open = !open;
  }
</script>

<section>
  <h3 on:click={expand} class:pb-5={!open} class="hover:cursor-pointer text-primary sm:text-3xl text-xl flex pb-5 align-middle">
    <svg class:rotate-180={open} class="h-6 w-6 stroke-primary my-auto mr-4 transition-all duration-500 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3">
      <path d="M19 9l-7 7-7-7" />
    </svg>
    {title}
  </h3>

  <div
    class:max-h-0={!open}
    class:max-h-[1000px]={open}
    class:mb-5={open}
    class="overflow-hidden transition-all duration-500">
    <slot />
  </div>
</section>