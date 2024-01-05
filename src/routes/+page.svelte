<script>
  import Herocard from "$lib/components/Herocard.svelte";
  import Button from "$lib/components/Button.svelte";
  import HeaderBanner from "$lib/components/HeaderBanner.svelte";
  import TwoCol from "$lib/components/TwoCol.svelte";
  import H3 from "$lib/components/H3.svelte";
  import H2 from "$lib/components/H2.svelte";
  let heroes = [
    { name: "Küchenmagier", imgurl: "heroes/Kuechenmagier.png" },
    { name: "Empfangselfen", imgurl: "heroes/Empfangselfen.png" },
    { name: "Servicehelden", imgurl: "heroes/Servicehelden.png" },
    { name: "Reinigungsninjas", imgurl: "heroes/Reinigungsninjas.png" },
    { name: "Backofficezauberer", imgurl: "heroes/Backofficezauberer.png" },
  ];

  import { reset, run } from "vanilla-cookieconsent";
  import config from "$lib/cookieconsent-config";

  const resetPlugin = () => {
    reset(true);
    run(config);
  };
</script>

<svelte:head>
  <title>Personalvermittlung Gastronomie Hotellerie</title>
  <meta name="description" content="" />
</svelte:head>
<!-- Header -->
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
      Unsere Mission ist es, großartige Mitarbeitende und großartige
      Arbeitgebende in der Hotellerie und Gastronomie zusammen zu bringen. Wir
      lieben Win-Win Situationen, die entstehen, wenn sich jeder um sein
      Kerngeschäft kümmert! Unseres ist Recruiting - weil leihen oder mieten von
      Personal einfach nicht genug ist!
    </p>
  </div>
  <div class="py-10 flex">
    <Button
      text="Mehr erfahren"
      link="/arbeitgeber"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>
<!-- Section Personalvermittlung für Hotellerie und Gastronomie -->
<div
  class="relative w-full bg-gradient-to-r from-gradient-dark to-gradient-light">
  <div
    class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12">
    <div class="order-2 lg:order-1 basis-1/2 shrink-0 self-start">
      <img
        class="rounded-2xl border-white border-4 w-full"
        src="/beatrix.jpg"
        alt="" />
    </div>
    <div class="flex flex-col justify-between order-1 lg:order-2 basis-1/2">
      <h1
        class="uppercase text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md">
        Personalvermittlung für Hotellerie und Gastronomie
      </h1>
      <p class="text-white text-1xl sm:text-2xl font-light py-5">
        “Die Liebe zur Gastronomie und Hotellerie entwickelte sich in meiner
        Jugend. Die Leidenschaft für gute Arbeitsbedingungen im Laufe meines
        Arbeitslebens. Die Liebe zu Menschen wurde mir in die Wiege gelegt -
        also fühle ich mich dazu verpflichtet dies alles für Sie im besten Sinne
        zu verbinden.”
      </p>
      <ul class=" list-disc list-inside pb-10">
        <li class="text-white text-1xl sm:text-2xl">Beatrix Westphal</li>
      </ul>
      <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5">
        <Button
          text="Mitarbeitende"
          link="/arbeitnehmer"
          color="bg-secondary" />
        <Button
          text="Hotelbetreiber"
          link="/arbeitgeber"
          color="bg-secondary" />
      </div>
    </div>
  </div>
</div>
<!-- Section Werde teil unserer Mission -->
<div class="relative w-full">
  <div
    class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12">
    <div
      class="order-2 lg:order-1 basis-full lg:basis-1/2 shrink-0 self-start lg:self-center">
      <img class="w-full rounded-2xl" src="/teamwork.jpg" alt="" />
    </div>
    <div
      class="flex flex-col justify-between order-1 lg:order-2 basis-full w-full lg:basis-1/2">
      <H3>
        <span class=" text-primary">Werde Teil unserer Mission</span><br />
        <span class=" text-primary">und</span>
        <span class=" text-secondary">sichere dir Vorteile</span><span>:</span>
      </H3>
      <ul
        class="text-primary font-light list-disc list ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pb-5 pt-4">
        <li>Mit einer Bewerbung - bei mehreren Arbeitgebenden bewerben.</li>
        <li>Wir arbeiten nur mit wertschätzenden Arbeitgebenden.</li>
        <li>Wir schauen, ob der Job zu Dir passt und Du zu dem Job.</li>
        <li>
          Wir bringen dich sicher in deinen beruflichen Heimathafen. -
          Dauerhaft!
        </li>
      </ul>
      <Button
        text="Offene Stellen"
        link="/jobs#coveto_iframe"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div>
</div>
<!-- Section Superheroes -->
<H3 align="text-center">
  <span class="text-primary">Welche</span>
  <span class="text-secondary">Superkräfte</span>
  <span class="text-primary">besitzt du?*</span>
</H3>
<div
  class=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-w-container-12 m-auto">
  {#each heroes as hero}
    <Herocard name={hero.name} imgurl={hero.imgurl} />
  {/each}
</div>
<div class="m-auto max-w-container-12 text-center pb-5 text-primary">
  <p>*Wir beziehen uns auf alle Geschlechterrollen (m/w/d).</p>
</div>
<!-- Section Gastfreundschaft ist Liebe! -->
<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Tischgedeck.jpg)] bg-cover bg-center h-[500px] flex justify-center items-center">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-between items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Gastfreundschaft ist Liebe!</span><br /><span
        class="text-secondary">Gute Arbeitsplätze auch</span
      ><span class="text-primary">!</span>
    </H2>
    <Button
      text="Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
<!-- Section Umsatzsteigerung durch neue Mitarbeitende -->
<div class="relative w-full">
  <div
    class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12">
    <div
      class="flex flex-col justify-between basis-full w-full lg:basis-1/2 lg:shrink-0">
      <H3>
        <span class=" text-primary">Umsatzsteigerung durch</span><br />
      <span class=" text-secondary">neue Mitarbeitende</span><span>:</span>
      </H3>
      <ul
        class="text-primary font-light list-disc list ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pb-5 pt-4">
        <li>Alle kümmern sich um ihre Kernkompetenzen</li>
      <li>Mehr Umsatz durch eine bessere Personaldecke</li>
      <li>Von der Stellenausschreibung bis zu den Schnuppertagen</li>
      <li>Professioneller Bewerbungsprozess</li>
      </ul>
      <Button
      text="Kostenloses Erstgespräch vereinbaren"
      link="mailto:info@rent-awesome-people.de?subject=Kostenloses Erstgespräch vereinbaren"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
    <div
      class="basis-full lg:basis-1/2 self-start lg:self-center">
      <img class="w-full rounded-2xl" src="/BeaundKunde.jpg" alt="" />
    </div>
  </div>
</div>
<!-- Section Für Hoteliers und Gastronomen -->
<div class="max-w-container-12 m-auto pb-9">
  <H3 align="text-center">
    <span class=" text-primary"> Für </span><span class=" text-secondary"
      >Hoteliers
    </span><span class=" text-primary">und </span><span class=" text-secondary"
      >Gastronomen</span
    ><span>!</span>
  </H3>
</div>
<TwoCol>
  <div slot="left" class="max-w-container-6 flex-1 pr-5 md:pr-20 flex flex-col">
    <H3>Unsere Partner:</H3>
    <img
      class="py-5 lg:max-w-[500px] md:max-w-[400px] sm:max-w-[300px] max-w-[250px]"
      src="/logo-bni.jpg"
      alt="BNI Logo" />
    <p class="text-1xl sm:text-2xl font-light py-5">
      Mitglied von BNI, DER Organisation für Geschäftsempfehlungen. 
      Wenn Sie einen zuverlässigen Geschäftskontakt zur Lösung einer
      Aufgabe suchen, sprechen Sie mich an!
      Gerne öffne ich auch Ihnen Türen.
    </p>
    <Button
      text="Mehr erfahren"
      link="/partner"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>

  <div
    slot="right"
    class="max-w-container-6 flex-1 pl-5 xl:pl-16 flex flex-col">
    <H3>Informationen für <br /> Arbeitgebende:</H3>
    <p class="text-1xl sm:text-2xl font-light py-5">
      Seit Jahren wird es schwieriger die passenden Bewerber:innen für offene
      Stellen zu finden. Ein Knackpunkt ist definitiv das Tagesgeschäft. Wer ein
      Unternehmen führt, hat eigentlich keine Zeit sich um die
      Stellenausschreibung, die zeitnahe Kontaktaufnahme und den Prozess des
      Aussortierens zu kümmern. Und schon sind großartige Kandidat:innen bei
      einem anderen Arbeitgebende. Wir kümmern uns um den kompletten Prozess von
      der Betriebs- und Bedarfsanalyse, über professionelle, wirkungsvolle
      Stellenausschreibungen bis hin zum vereinbaren des Termins für einen
      Schnuppertag - Sie lernen sich kennen und wenn es passt, schließen Sie den
      Vertrag ab!
    </p>
    <Button
      text="Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</TwoCol>
<!-- Section Dein Boot ist gekentert? -->
<div
  class=" w-full bg-[url(/VerlaufBanner.png),_url(/MannImPool.png)] bg-cover bg-no-repeat bg-[position:0%,_right] 2xl:bg-[position:50%,_right] h-[300px] md:h-[500px] xl:h-[600px] flex flex-col md:flex-row justify-start items-center">
  <div
    class="max-w-container-12 w-full flex flex-col justify-start items-start m-auto pt-5 px-5 xl:px-0">
    <div>
      <H2>
        <span class=" text-primary">Dein Boot ist gekentert?</span><br />
        <span class="text-secondary">Ab in den neuen Job</span><span class="text-primary"
          >!</span>
      </H2>
      <div class="pt-5">
        <Button
          text="Jetzt anmelden"
          link="/jobs#coveto_iframe"
          color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
    </div>
  </div>
</div>
