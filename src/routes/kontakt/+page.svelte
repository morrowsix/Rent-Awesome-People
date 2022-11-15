<script>
    import Button from "../components/Button.svelte";
    import HeaderBanner from "../components/HeaderBanner.svelte";
    import H3 from "../components/H3.svelte";
    import H2 from "../components/H2.svelte";
    import Contactform from "../components/Contactform.svelte";
  </script>
<HeaderBanner imglink="/Header-Start.png">
    <div>
      <H2>
        <span class=" text-primary">Awesome</span>
        <span class="text-secondary">Recruiting</span><br>
        <span class=" text-primary">Awesome </span>
        <span class="text-secondary">People</span><br>
        <span class=" text-primary">Awesome </span>
        <span class="text-secondary">Jobs</span>
      </H2>
    </div>
    <div
      class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12">
      <p>
        Unsere Mission ist es, großartige Mitarbeitende und großartige Arbeitgeber
        in der Hotellerie und Gastronomie zusammen zu bringen. Wir lieben Win-Win
        Situationen, die entstehen, wenn sich jeder um sein Kerngeschäft kümmert!
        Unseres ist Recruiting - weil leihen oder mieten von Personal einfach
        nicht genug ist!
      </p>
    </div>
  </HeaderBanner>
  <div class="pb-10"></div>
  <Contactform/>
  <div
  class=" w-full bg-[url(/Rectangle.png),_url(/Sekretaerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center mt-10">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-between items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Dein neuer Betrieb vermisst dich!</span><br />
      <span class="text-secondary">Auf in eine gute Zukunft</span><span
        class="text-primary">!</span>
    </H2>
    <div class="flex flex-col md:flex-row gap-4">
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