<script>
  import Herocard from "./components/Herocard.svelte";
  import Button from "./components/Button.svelte";
  import HeaderBanner from "./components/HeaderBanner.svelte";
  import TwoCol from "./components/TwoCol.svelte";
  import H3 from "./components/H3.svelte";
  import H2 from "./components/H2.svelte";
  let heroes = [
    { name: "Küchenmagier", imgurl: "heroes/Kuechenmagier.png" },
    { name: "Empfangselfen", imgurl: "heroes/Empfangselfen.png" },
    { name: "Servicehelden", imgurl: "heroes/Servicehelden.png" },
    { name: "Reinigungsninjas", imgurl: "heroes/Reinigungsninjas.png" },
    { name: "Backofficezauberer", imgurl: "heroes/Backofficezauberer.png" },
  ];
</script>

<HeaderBanner imglink="/Header-Start.png">
  <div>
    <H2>
      <span class=" text-primary">Awesome </span>
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
  <div class="py-10 flex">
    <Button
      text="Mehr erfahren"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>
<div
  class="relative w-full bg-gradient-to-r from-gradient-dark to-gradient-light">
  <div
    class="max-w-container-12 relative flex justify-end m-auto gap-14 py-10 flex-col lg:flex-row">
    <div class="hidden md:block absolute 2xl:left-[-150px] left-0 bottom-0">
      <img src="/beatrix-westphal.png" alt="Beatrix Westphal" class="" />
    </div>
    <div
      class=" lg:basis-2/5 md:w-1/2 lg:w-[unset] pr-5 lg:pr-0 self-end lg:self-center mx-5 md:mx-0">
      <h1 class="uppercase text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md">Personalvermittlung für Hotellerie und Gastronomie</h1>
      <p class="text-white text-1xl sm:text-2xl font-light block pt-4">
        “Die Liebe zur Gastronomie und Hotellerie entwickelte sich in meiner
        Jugend. Die Leidenschaft für gute Arbeitsbedingungen im Laufe meines
        Arbeitslebens. Die Liebe zu Menschen wurde mir in die Wiege gelegt -
        also fühle ich mich dazu verpflichtet dies alles für Sie im besten Sinne
        zu verbinden.”
      </p>
      <br />
      <ul class=" list-disc list-inside">
        <li class="text-white text-1xl sm:text-2xl">Beatrix Westphal</li>
      </ul>
    </div>
    <div
      class="self-center lg:self-center md:self-end md:w-1/2 lg:w-[unset] flex flex-col md:items-start justify-center md:justify-start lg:items-center gap-3 pr-5 xl:pr-0">
      <p class="text-white text-center font-medium text-1xl sm:text-2xl uppercase">
        Beratung für:
      </p>
      <Button text="Mitarbeitende" link="/arbeitnehmer" color="bg-secondary" />
      <Button text="Arbeitgeber" link="/arbeitgeber" color="bg-secondary" />
    </div>
  </div>
</div>
<div
  class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0">
  <div>
    <img
      class="xl:max-w-[unset] lg:max-w-[550px] pb-5 lg:pb-0"
      src="/HotelCheckIn.png"
      alt="" />
  </div>
  <div class="flex flex-col justify-between md:ml-10">
    <H3>
      <span class=" text-primary">Werde Teil unserer Mission</span><br />
      <span class=" text-primary">und</span>
      <span class=" text-secondary">sichere dir Vorteile</span><span>:</span>
    </H3>
    <ul
      class="text-primary font-light list-disc list ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pb-5 pt-4">
      <li>Mit einer Bewerbung - bei mehreren Arbeitgebern bewerben.</li>
      <li>Wir arbeiten nur mit wertschätzenden Arbeitgebern.</li>
      <li>Wir schauen, ob der Job zu Dir passt und Du zu dem Job.</li>
      <li>
        Wir bringen dich sicher in deinen beruflichen Heimathafen. - Dauerhaft!
      </li>
    </ul>
    <Button
      text="Jetzt Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
<H3 align="text-center">
  <span class="text-primary">Welche</span>
  <span class="text-secondary">Superkräfte</span>
  <span class="text-primary">besitzt du?</span>
</H3>
<div class=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-w-container-12 m-auto">
  {#each heroes as hero}
    <Herocard name={hero.name} imgurl={hero.imgurl} />
  {/each}
</div>
<div
  class=" w-full bg-[url(/Rectangle.png),_url(/professionelleKellnerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-between items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Gastfreundschaft ist Liebe!</span><br /><span
        class="text-secondary">Gute Arbeitsplätze auch</span
      ><span class="text-primary">!</span>
    </H2>
    <Button
      text="Jetzt anmelden"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
<div
  class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0">
  <div class="flex flex-col justify-between md:mr-10">
    <H3>
      <span class=" text-primary">Umsatzsteigerung durch</span><br />
      <span class=" text-secondary">neue Mitarbeitende</span><span>:</span>
    </H3>
    <ul
      class="text-primary font-light list-disc ml-7 text-1xl sm:text-2xl lg:whitespace-nowrap sm:leading-sm pb-5 pt-4">
      <li>Jeder kümmert sich um seine Kernkompetenz</li>
      <li>Mehr Umsatz durch eine bessere Personaldecke</li>
      <li>Von der Stellenausschreibung bis zu den Schnuppertagen</li>
      <li>Professioneller Bewerbungsprozess</li>
    </ul>
    <Button
      text="Kostenloses Erstgespräch vereinbaren"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
  <div class="order-first lg:order-1">
    <img
      class="xl:max-w-[unset] lg:max-w-[550px] pb-5 lg:pb-0"
      src="/FroheMitarbeiterin.png"
      alt="" />
  </div>
</div>
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
  <div slot="left" class="max-w-container-6 flex-1 pr-5 md:pr-20">
    <H3>Unsere Partner:</H3>
    <img class="py-5" src="/HospitalityServices-Logo.png" alt="Hospitality Services Logos" />
    <p class="text-1xl sm:text-2xl font-light py-5">
      Die Unternehmen des Hospitality Services haben sich zusammengeschlossen,
      um die Hotellerie und Gastronomie in allen Belangen zu unterstützen. Auch
      in schweren Zeiten!
    </p>
  </div>

  <div slot="right" class="max-w-container-6 flex-1 pl-5 xl:pl-16 flex flex-col">
    <H3>Informationen für <br /> Arbeitgeber:</H3>
    <p class="text-1xl sm:text-2xl font-light py-5">
      Seit Jahren wird es schwieriger die passenden Bewerber:innen für offene
      Stellen zu finden. Ein Knackpunkt ist definitiv das Tagesgeschäft. Wer ein
      Unternehmen führt, hat eigentlich keine Zeit sich um die
      Stellenausschreibung, die zeitnahe Kontaktaufnahme und den Prozess des
      Aussortierens zu kümmern. Und schon sind großartige Kandidat:innen bei
      einem anderen Arbeitgeber. Wir kümmern uns um den kompletten Prozess von
      der Betriebs- und Bedarfsanalyse, über professionelle, wirkungsvolle
      Stellenausschreibungen bis hin zum vereinbaren des Termins für einen
      Schnuppertag - Sie lernen sich kennen und wenn es passt, schließen Sie den
      Vertrag ab!
    </p>
    <Button
      text="Jetzt Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</TwoCol>
<div
  class=" w-full bg-[url(/VerlaufBanner.png),_url(/MannImPool.png)] bg-cover bg-no-repeat bg-[position:0%,_right] 2xl:bg-[position:50%,_right] md:h-[500px] flex flex-col md:flex-row justify-start items-center">
  <div class="self-end 2xl:max-w-[900px] md:max-w-[600px] max-w-[400px] order-2 md:order-1 m-auto md:m-[unset]"><img src="/BeatrixWestphal2.png" alt="" /></div>
  <div
    class="max-w-container-12 flex flex-col justify-start items-start m-auto md:m-[unset] order-1 md:order-2 pt-5 md:pr-5">
    <H2>
      <span class=" text-primary">Dein Boot ist</span><br />
      <span class="text-primary">gekentert?</span><br />
      <span class="text-secondary">Ab in den</span><br />
      <span class="text-secondary">neuen Job</span><span class="text-primary"
        >!</span>
    </H2>
    <Button
      text="Jetzt anmelden"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
