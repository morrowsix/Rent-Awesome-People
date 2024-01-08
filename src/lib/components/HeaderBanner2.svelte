<script>
  export let imglink;
  export let altText;
</script>

<div
  class="bg-[url(/2022-10-13-Header-Background-nro.png)] bg-cover relative px-6 xl:px-0 py-20">
  <div class="max-w-container-12 flex flex-col lg:flex-row m-auto">
    <div
      class=" max-w-container-12 m-auto flex flex-col justify-center flex-1">
      <slot />
    </div>
    <div class="flex lg:justify-end align-middle flex-1 max-h-[628px]">
      <img
        class="rounded-2xl border-primary border-4 object-cover"
        src={imglink}
        alt={altText} />
    </div>
  </div>
</div>
