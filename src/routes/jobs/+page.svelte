<svelte:head>
  <title>Jobs</title>
  <meta name="description" content="">
</svelte:head>
<script type="text/javascript" src="https://k58053.coveto.de/jobs.js">
    import Button from "../components/Button.svelte";
    import HeaderBanner from "../components/HeaderBanner.svelte";
    import H3 from "../components/H3.svelte";
    import H2 from "../components/H2.svelte";
    
  </script>
  
  <HeaderBanner imglink="/Header-Start.png">
    <div class="2xl:pt-40 2xl:pb-20 xl:pt-32">
      <H2>
        <span class=" text-primary">Glückliche</span><br>
        <span class=" text-primary">Mitarbeitende</span><br>
        <span class="text-secondary">Glückliche</span><br>
        <span class="text-secondary">Gäste</span><span class="text-primary">!</span>
      </H2>
    </div>
  </HeaderBanner>

<div class="w-full bg-gradient-to-r from-gradient-dark to-gradient-light flex flex-col gap-4 lg:flex-row">
  <div>
    <img src="/Mitarbeiter-Tablet.png" alt="" class="object-cover h-full">
  </div>
  <div class="flex-1 py-10 px-5 max-w-container-6 m-auto order-first lg:order-1">
    <H3>
      <span class="text-white">Wir sind der Direktvermittler</span><br>
      <span class="text-white">für die Hotellerie und Gastronomie!</span>
    </H3>
    <div
      class="text-white font-light text-1xl sm:text-2xl pr-5 pt-5 sm:leading-sm">
      <p>
        Du bist auf der Suche nach einem Job der Dich zufrieden stellt? 
        Dann lies unsere Stellenangebote genau! Wir analysieren die Arbeitgebenden und die Stellen genau
        - So kannst Du schon beim Lesen der Anzeige einen guten Eindruck gewinnen. Unsere Mission ist es,
        gute Arbeitgeber:innen und gute Arbeitnehmer:innen zusammen zu bringen!</p><br>
        <p>
        Du bist noch angestellt? Wir führen auf Wunsch auch am Wochenende,
        frühmorgens oder am Abend Kennenlerngespräche durch. So, wie es zu deinem Leben passt!
        </p><br>
        <p>
        Be awesome! Weil glückliche Gäste von glücklichen Mitarbeitenden kommen.
      </p>
    </div>
  </div>
</div>

<div class="pt-20 pb-5" id="section-jobs">
  <H2 align="text-center"><span class="text-primary">Ist dein neuer Job dabei?</span></H2>
</div>
<!-- coveto Stellenportal iframe -->
    <iframe id="coveto_iframe" src="https://k58053.coveto.de/public/jobs/" border="0" style="border: none;" width="100%" height="750"></iframe>
<!-- end of coveto Stellenportal iframe -->