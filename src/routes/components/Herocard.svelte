<script>
  import { scale } from "svelte/transition";
  export let name;
  export let imgurl;
</script>

<div
  class="group w-56 m-auto pt-7 hover:pt-0 transition-all">
  <div
    class="relative bg-gradient-to-r from-gradient-dark to-gradient-light rounded-2xl w-full h-auto flex justify-center m-auto group-hover:shadow-2xl overflow-hidden">
    <img class="" src={imgurl} alt="Arbeitnehmer aus Hotel und Gastronomie"/>
    <div class="absolute bg-opacity-60 bg-gradient-dark hover:bg-opacity-0 b w-full h-full transition-all"></div>
  </div>
  <div class="flex justify-center pb-5">
    <p
      class="uppercase text-2xl text-secondary font-medium p-3">
      {name}
    </p>
  </div>
</div>
