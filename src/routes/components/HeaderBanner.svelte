<script>
  export let imglink;
</script>

<div
  class="bg-[url(/2022-10-13-Header-Background-nro.png)] bg-cover relative px-6 xl:px-0">
  <div class="absolute right-0 bottom-0">
    <img
      class="2xl:max-h-[900px] xl:max-h-[700px] lg:max-h-[600px] md:max-h-[400px] max-h-80"
      src={imglink}
      alt="" />
  </div>
  <div class=" max-w-container-12 lg:h-[1000px] h-[900px] m-auto pt-12 lg:pt-28 pb-72 sm:pb-60">
    <slot />
  </div>
</div>
