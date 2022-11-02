<script>
  import Button from "../components/Button.svelte";
  import HeaderBanner from "../components/HeaderBanner.svelte";
  import TwoCol from "../components/TwoCol.svelte";
  import H3 from "../components/H3.svelte";
  import H2 from "../components/H2.svelte";
</script>

<HeaderBanner imglink="/Header-Arbeitgeber.png">
  <div>
    <H2>
      <span class=" text-primary">Glückliche</span><br />
      <span class=" text-primary">mitarbeitende +</span><br />
      <span class="text-secondary">Glückliche Gäste</span><span
        class=" text-primary">=</span
      ><br />
      <span class="text-primary">Glücklicher</span><span class="text-secondary">
        Chef</span
      ><span class="text-primary">.</span>
    </H2>
  </div>
  <div
    class="text-primary text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 sm:leading-sm">
    <p>
      Wie würde es sich für Sie anfühlen, wenn Sie sich keine Gedanken mehr
      darum machen müssten, wo Sie Ihr Personal her bekommen? Gut? Dann sollten
      wir uns kennenlernen. Wir nehmen Ihnen diese Sorge ab! - Eine Garantie
      können wir nur dann geben, wenn Sie gewillt sind über den Tellerrand
      hinaus zu schauen. Alles andere wäre unseriös!
    </p>
  </div>
  <div class="py-10 flex">
    <Button
      text="Mehr erfahren"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>
<TwoCol>
  <div slot="left" class="max-w-container-6 flex-1 pt-9 pr-5 lg:pr-20">
    <H3>Es mangelt Ihnen nicht an Gästen, aber an Personal?</H3>
    <ul
      class="font-light list-disc list-inside ml-4 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Fachkräftemangel?</li>
      <li>Keine Zeit für Recruiting?</li>
    </ul>
  </div>

  <div
    slot="right"
    class="max-w-container-6 flex-1 pl-5 xl:pl-16 pt-9 flex flex-col">
    <H3>Direktvermittlung <br> durch uns!</H3>
    <ul
      class="font-light list-disc list-inside ml-4 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Passgenaues Recruiting</li>
      <li>Fachkräfte aus der Umgebung und dem Ausland</li>
    </ul>
  </div>
</TwoCol>

<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Sekretaerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-between items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Wer wagt gewinnt!</span><br />
      <span class="text-secondary">Vielleicht haben wir</span><br />
      <span class="text-secondary">deinen Traumjob</span><span
        class="text-primary">?</span>
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
