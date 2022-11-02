<script>
  import { page } from "$app/stores";
  let path;
  $: path = $page.url.pathname;
  let navlinks = [
    { title: "Startseite", url: "/" },
    { title: "Arbeitnehmer", url: "/arbeitnehmer" },
    { title: "Arbeitgeber", url: "/arbeitgeber" },
    { title: "Jobs", url: "/jobs" },
    { title: "Über uns", url: "/ueberuns" },
    { title: "Kontakt", url: "/kontakt" },
  ];
</script>

<nav
  class="
  relative
  max-w-container-12
  mx-auto
  flex flex-wrap
  items-center
  justify-between
  py-4
  text-primary
  text-2xl
  navbar navbar-expand-lg navbar-light
  uppercase
  ">
  <div
    class="container-fluid w-full flex flex-wrap items-center justify-between">
    <button
      class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
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
    <div
      class="collapse navbar-collapse flex-grow items-center"
      id="navbarSupportedContent">
      <a
        class="
        flex
        items-center
        pr-20
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
          loading="lazy" />
      </a>
      <!-- Left links -->
      <ul
        class="navbar-nav flex flex-grow justify-between flex-col pl-0 list-style-none mx-auto font-medium">
        {#each navlinks as navlink}
          <li class={path === navlink.url ? "text-secondary" : ""}>
            <a class="nav-link p-0 hover:text-secondary" href={navlink.url}
              >{navlink.title}</a>
          </li>
        {/each}
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
  </div>
</nav>
