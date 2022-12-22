<svelte:head>
  <title>Über Uns</title>
  <meta name="title" content="Über Uns">
</svelte:head>
<script>
  import Button from "../components/Button.svelte";
  import HeaderBanner from "../components/HeaderBanner.svelte";
  import H3 from "../components/H3.svelte";
  import H2 from "../components/H2.svelte";
  import Contactform from "../components/Contactform.svelte";
</script>

<HeaderBanner imglink="/Header-Ueberuns.png">
  <div>
    <H2>
      <span class=" text-primary">Win-Win-Win</span><br />
      <span class=" text-primary">Situationen</span><br />
      <span class="text-secondary">Gemeinsam</span><br />
      <span class="text-secondary">schaffen</span><span class=" text-primary"
        >!</span
      ><br />
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 sm:leading-sm">
    <p>
      Stellt euch vor, wir konnten euch zusammenbringen und nun sind 3 Probleme
      gelöst!
    </p>
    <br />
    <p>
      Glückliche Gäste durch glückliche Mitarbeitende - Das beglückt doch auch
      Ihr Unternehmerherz!
    </p>
  </div>
  <div class="py-10 flex">
    <Button
      text="Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>

<div class="max-w-container-12 flex flex-col md:flex-row m-auto pt-10 relative">
  <div class="self-end xl:w-[unset] md:w-1/2 flex-1">
    <img src="/Bea_Fjolla.png" alt="" />
  </div>
  <div class="flex-1 pl-5 md:pl-0 order-first md:order-1 md:pt-10 pb-10">
    <H2>
      <span class=" text-primary">Awesome</span><br />
      <span class="text-secondary">Results</span><span class=" text-primary"
        >!</span>
    </H2>
    <H3>
      <br />
      <span class="text-primary">Wir versprechen nur, </span><br />
      <span class="text-secondary">was wir auch halten</span><span
        class="text-primary">!</span>
    </H3>
    <div
      class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
      <p>
        Auf dem heutigen Arbeitsmarkt eine Garantie zu geben, ist schwierig.
        Aber wir versprechen alles dafür zu tun, dass Bewerbende und Auftraggebende
        zu Mitarbeitenden und Arbeitgebenden werden.</p><br>
        <p>
        Egal ob Sie das Schiff
        steuern oder auf dem Schiff arbeiten. Vom Twindeck bis zur Brücke ist
        jede(r) wichtig!</p><br>
        <p>
        Lassen Sie mich Ihr Beiboot sein!
      </p>
    </div>
  </div>
</div>
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
