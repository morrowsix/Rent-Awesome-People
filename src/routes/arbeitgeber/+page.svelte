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
      <span class="text-primary">Glücklicher </span><span class="text-secondary">
        Chef</span
      ><span class="text-primary">.</span>
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 sm:leading-sm">
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
      <li>Kündigungen in der Probezeit?</li>
    </ul>
  </div>

  <div
    slot="right"
    class="max-w-container-6 flex-1 pl-5 xl:pl-16 pt-9 flex flex-col">
    <H3>Direktvermittlung <br /> durch uns!</H3>
    <ul
      class="font-light list-disc list-inside ml-4 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Passgenaues Recruiting</li>
      <li>Fachkräfte aus der Umgebung und dem Ausland</li>
      <li>Begleitung im Onboarding-Prozess</li>
    </ul>
  </div>
</TwoCol>

<div class="max-w-container-12 flex flex-col md:flex-row m-auto pt-10 relative">
  <div class="self-end xl:w-[unset] md:w-1/2">
    <img src="/Beatrix.png" alt="" />
  </div>
  <div class="flex-1 pl-5 md:pl-0 order-first md:order-1 md:pt-10">
    <H2>
      <span class=" text-primary">Mein Gastroherz</span><br />
      <span class="text-secondary">Ihr Vorteil</span><span class=" text-primary"
        >!</span>
    </H2>
    <H3>
      <br />
      <span class="text-primary">Meine </span><span class="text-secondary"
        >Expertise</span
      ><span class="text-primary">:</span>
    </H3>
    <div
      class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
      <p>
        Seit über 25 Jahren bin ich in der Gastronomie unterwegs. 1994 hatte ich
        meinen ersten Gastrojob in einem Bierwagen auf einem Volksfest. Seit dem
        schlägt mein Herz für die Gastronomie. Gästen Wünsche von den Augen
        abzulesen ist eine meiner Superkräfte.
      </p><br>
      <p>
        Ich habe von der Festzeltgastronomie bis zum 4 Sterne superior Haus
        alles geliebt und mich an die Gegebenheiten angepasst und durfte von
        ganz fantastischen Kollegen lernen.
      </p><br>
      <p>
        Vor 10 Jahren begann meine Reise hinter die Kulissen. 8 Jahre auf einem
        Kreuzfahrtschiff, danach in einer Zeitarbeitsfirma. Gute Mitarbeitende
        brauchen gute Arbeitgeber, um ihr Potenzial voll auszuschöpfen! Sein Sie
        ein Teil der Revolution im Gastgewerbe!
      </p>
    </div>
  </div>
</div>

<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Footer-Banner-Arbeitgeber.png)] bg-cover bg-center h-[500px] flex justify-center items-center">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-center items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Wir finden,</span><br />
      <span class="text-secondary">was Sie brauchen.</span>
    </H2>
    <div class="flex flex-col md:flex-row pt-5">
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
