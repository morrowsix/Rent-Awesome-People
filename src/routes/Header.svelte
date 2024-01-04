<script>
  import { page } from "$app/stores";
  let path;
  let mobileNavVisible = "max-h-0";
  $: path = $page.url.pathname;
  let navlinks = [
    { title: "Startseite", url: "/" },
    { title: "Arbeitnehmer", url: "/arbeitnehmer" },
    { title: "Arbeitgeber", url: "/arbeitgeber" },
    { title: "Jobs", url: "/jobs" },
    { title: "Partner", url: "/partner" },
    { title: "Über uns", url: "/ueberuns" },
    { title: "Kontakt", url: "/kontakt" },
  ];
  function toggleMobileMenu(){
    if (mobileNavVisible == "max-h-[400px]"){
      mobileNavVisible = "max-h-0";
    } else{
      mobileNavVisible = "max-h-[400px]";
    }
    
  }
</script>

<nav
  class="relative max-w-container-12 mx-auto flex flex-wrap items-center justify-between py-4 text-primary text-xl lg:text-2xl navbar navbar-expand-lg navbar-light uppercase">
  <div
    class="container-fluid w-full flex flex-wrap items-center justify-between">
    <a
      class="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
      "
      href="/">
      <img
        src="/rap-logo.png"
        alt="Rent Awesome People Logo"
        loading="lazy"
        class="lg:max-w-[unset] max-w-[250px]" />
    </a>
    <button
      class="text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline menu:hidden"
      type="button"
      aria-label="Toggle navigation"
      on:click={toggleMobileMenu}>
      <svg
        focusable="false"
        data-icon="bars"
        class="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
      </svg>
    </button>

    <!-- Desktop Nav -->
    <div class="flex-grow items-center px-5 hidden menu:block">
      <ul
        class="flex flex-grow justify-between pl-0 list-style-none mx-auto font-medium">
        {#each navlinks as navlink}
          <li class={path === navlink.url ? "text-secondary" : ""}>
            <a class="nav-link p-0 hover:text-secondary" href={navlink.url}
              >{navlink.title}</a>
          </li>
        {/each}
      </ul>
    </div>

  </div>
  <!-- Mobile Nav -->
  <div class="flex-grow items-center text-center pl-5 menu:hidden transition-all overflow-hidden {mobileNavVisible} pt-5">
    <ul
      class="flex flex-grow gap-4 flex-col list-style-none font-medium">
      {#each navlinks as navlink}
        <li class={path === navlink.url ? "text-secondary" : ""} on:click={toggleMobileMenu}>
          <a class=" hover:text-secondary" href={navlink.url}
            >{navlink.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
