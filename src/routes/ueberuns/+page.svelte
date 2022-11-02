<script>
  import Button from "../components/Button.svelte";
  import HeaderBanner from "../components/HeaderBanner.svelte";
  import H3 from "../components/H3.svelte";
  import H2 from "../components/H2.svelte";
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
    class="text-primary text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 sm:leading-sm">
    <p>
      Stellt euch vor, wir konnten euch zusammenbringen und nun sind 3 Probleme
      gelöst!
    </p><br> 
    <p>
      Glückliche Gäste durch glückliche Mitarbeitende - Das beglückt doch auch
      Ihr Unternehmerherz!
    </p>
  </div>
  <div class="py-10 flex">
    <Button
      text="Mehr erfahren"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>

<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Sekretaerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-between items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Dein neuer Betrieb vermisst dich!</span><br />
      <span class="text-secondary">Auf in eine gute Zukunft</span><span class="text-primary">!</span>
    </H2>
    <div class="flex flex-col md:flex-row">
      <Button
        text="Jetzt bewerben"
        link="/jobs"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
      <Button
        text="Initiativ Bewerbung"
        link="mailto:info@rent-awesome-people.de"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div>
</div>
