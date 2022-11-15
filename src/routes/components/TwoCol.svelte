<script>
</script>

<div class="flex justify-center w-full flex-col md:flex-row">
  <div
    class=" bg-gradient-to-r from-gradient-dark to-gradient-light text-white flex md:justify-end flex-1 pl-5 xl:pl-0 py-10 md:pb-0">
    <slot name="left" />
  </div>
  <div class=" bg-secondary text-white flex justify-start flex-1 py-10 pr-5 xl:pr-0">
    <slot name="right" />
  </div>
</div>
