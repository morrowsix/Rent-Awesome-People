<svelte:head>
  <title>Kontakt</title>
  <meta name="description" content="">
</svelte:head>
<script>
  import Button from "$lib/components/Button.svelte";
  import HeaderBanner from "$lib/components/HeaderBanner.svelte";
  import H3 from "$lib/components/H3.svelte";
  import H2 from "$lib/components/H2.svelte";
  import Contactform from "$lib/components/Contactform.svelte";
  import H1 from "$lib/components/H1.svelte";
</script>

<HeaderBanner imglink="/Header-Start.png">
  <div>
    <H2>
      <span class=" text-primary">Awesome </span>
      <span class="text-secondary">Recruiting</span><br />
      <span class=" text-primary">Awesome </span>
      <span class="text-secondary">People</span><br />
      <span class=" text-primary">Awesome </span>
      <span class="text-secondary">Jobs</span>
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12">
    <p>
      Unsere Mission ist es, großartige Mitarbeitende und großartige Arbeitgebende
      in der Hotellerie und Gastronomie zusammen zu bringen. Wir lieben Win-Win
      Situationen, die entstehen, wenn sich jeder um sein Kerngeschäft kümmert!
      Unseres ist Recruiting - weil leihen oder mieten von Personal einfach
      nicht genug ist!
    </p>
  </div>
  <div class="h-32 flex" />
</HeaderBanner>
<div class="pb-10" />
<Contactform />

<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Sekretaerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center mt-10">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-center items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Dein neuer Betrieb vermisst dich!</span><br />
      <span class="text-secondary">Auf in eine gute Zukunft</span><span
        class="text-primary">!</span>
    </H2>
    <div class="flex flex-col md:flex-row pt-5 gap-4">
      <Button
        text="Offene Stellen"
        link="/jobs#coveto_iframe"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
      <Button
        text="Initiativ Bewerbung"
        link="mailto:info@rent-awesome-people.de?subject=Initiativ Bewerbung"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div>
</div>
