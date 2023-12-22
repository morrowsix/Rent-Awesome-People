<script>
  export let imglink;
</script>

<div
  class="bg-[url(/2022-10-13-Header-Background-nro.png)] bg-cover relative px-6 xl:px-0 py-20">
  <div class="max-w-container-12 flex flex-col lg:flex-row m-auto">
    <div
      class=" max-w-container-12 m-auto flex flex-col justify-center flex-1">
      <slot />
    </div>
    <div class="flex justify-center lg:justify-end align-middle flex-1">
      <img
        class="rounded-2xl border-primary border-4"
        src={imglink}
        alt="" />
    </div>
  </div>
</div>
