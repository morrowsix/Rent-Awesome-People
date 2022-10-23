<script>
  import Herocard from "./components/Herocard.svelte";
  import Button from "./components/Button.svelte";
  let heroes = [
    { name: "Küchenmagier", imgurl: "heroes/Kuechenmagier.png" },
    { name: "Empfangselfen", imgurl: "heroes/Empfangselfen.png" },
    { name: "Servicehelden", imgurl: "heroes/Servicehelden.png" },
    { name: "Reinigungsninjas", imgurl: "heroes/Reinigungsninjas.png" },
    { name: "Backofficezauberer", imgurl: "heroes/Backofficezauberer.png" },
  ];
</script>

<div class="bg-[url(/2022-10-13-Header-Background-nro.png)] bg-cover relative">
  <div class="absolute right-0 bottom-0">
    <img class="max-h-[900px]" src="/2022-08-23-KeyVisual_RAP-nro.png" alt="" />
  </div>
  <div class=" max-w-container m-auto pt-28 pb-60">
    <div class="uppercase text-6xl leading-lg">
      <h2>
        <span class=" text-primary">Awesome </span>
        <span class="text-secondary">Recruiting</span>
      </h2>
      <h2>
        <span class=" text-primary">Awesome </span>
        <span class="text-secondary">People</span>
      </h2>
      <h2>
        <span class=" text-primary">Awesome </span>
        <span class="text-secondary">Jobs</span>
      </h2>
    </div>
    <div class="text-primary text-2xl pt-12 w-6/12 leading-sm">
      <p>
        Unsere Mission ist es, großartige Mitarbeitende und großartige
        Arbeitgeber in der Hotellerie und Gastronomie zusammen zu bringen. Wir
        lieben Win-Win Situationen, die entstehen, wenn sich jeder um sein
        Kerngeschäft kümmert! Unseres ist Recruiting - weil leihen oder mieten
        von Personal einfach nicht genug ist!
      </p>
    </div>
    <div class="py-10 flex">
      <Button
        text="Mehr erfahren"
        link="/kontakt"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div>
</div>
<div
  class="relative w-full h-[300px] bg-gradient-to-r from-gradient-dark to-gradient-light">
  <div class="max-w-container h-[300px] flex justify-between m-auto">
    <div class="self-end">
      <img src="/beatrix-westphal.png" alt="Beatrix Westphal" class="" />
    </div>
    <div class="basis-2/5 self-center">
      <p class="text-white text-2xl font-light block">
        “Die Liebe zur Gastronomie und Hotellerie entwickelte sich in meiner
        Jugend. Die Leidenschaft für gute Arbeitsbedingungen im Laufe meines
        Arbeitslebens. Die Liebe zu Menschen wurde mir in die Wiege gelegt -
        also fühle ich mich dazu verpflichtet dies alles für Sie im besten Sinne
        zu verbinden.”
      </p>
      <br />
      <li class="text-white text-2xl">Beatrix Westphal</li>
    </div>
    <div class="self-center flex flex-col justify-start items-center gap-3">
      <p class="text-white text-center font-medium text-2xl uppercase">
        Beratung für:
      </p>
      <Button text="Mitarbeitende" link="/arbeitnehmer" color="bg-secondary" />
      <Button text="Hotelbetreiber" link="/arbeitgeber" color="bg-secondary" />
    </div>
  </div>
</div>
<div class="flex justify-between max-w-container m-auto py-14">
  <div>
    <img class="max-w-[unset]" src="/HotelCheckIn.png" alt="" />
  </div>
  <div class="flex flex-col justify-between ml-10">
    <h3 class="uppercase text-4xl font-medium leading-md">
      <span class=" text-primary">Werde Teil unserer Mission</span><br />
      <span class=" text-primary">und</span>
      <span class=" text-secondary">sichere dir Vorteile</span>
      <span>:</span>
    </h3>
    <ul
      class="text-primary font-light list-disc list-inside ml-4 text-2xl lg:whitespace-nowrap leading-sm">
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
<h3 class="uppercase text-4xl text-center">
  <span class="text-primary">Welche</span>
  <span class="text-secondary">Superkräfte</span>
  <span class="text-primary">besitzt du?</span>
</h3>
<div class=" flex justify-around max-w-container m-auto">
  {#each heroes as hero}
    <Herocard name={hero.name} imgurl={hero.imgurl} />
  {/each}
</div>
<div
  class=" w-full bg-[url(/Rectangle.png),_url(/professionelleKellnerin.png)] bg-cover h-[500px] flex flex-col justify-center items-center">
  <div
    class="max-w-container w-[1420px] h-60  flex flex-col justify-between items-start m-auto">
    <h2 class="uppercase text-6xl font-medium leading-lg">
      <span class=" text-primary">Gastfreundschaft ist Liebe!</span><br />
      <span class="text-secondary">Gute Arbeitsplätze auch</span>
      <span class="text-primary">!</span>
    </h2>
    <Button
      text="Jetzt anmelden"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
<div class="flex justify-between max-w-container m-auto py-14">
  <div class="flex flex-col justify-between mr-10">
    <h3 class="uppercase text-4xl font-medium leading-md">
      <span class=" text-primary">Umsatzsteigerung durch</span><br />
      <span class=" text-secondary">neue Mitarbeitende</span>
      <span>:</span>
    </h3>
    <ul
      class="text-primary font-light liœst-disc list-inside ml-4 text-2xl lg:whitespace-nowrap leading-sm">
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
  <div>
    <img class="max-w-[unset]" src="/FroheMitarbeiterin.png" alt="" />
  </div>
</div>
<div
  class=" w-full bg-[url(/VerlaufBanner.png),_url(/MannImPool.png)] bg-contain bg-no-repeat bg-[position:50%,_right] h-[500px] flex justify-center items-center">
  <div class="self-end"><img src="/BeatrixWestphal2.png" alt="" /></div>
  <div
    class="max-w-container w-[1420px] flex flex-col justify-between items-start">
    <h2 class="uppercase text-6xl font-medium leading-lg">
      <span class=" text-primary">Dein Boot ist</span><br />
      <span class="text-primary">gekentert?</span><br />
      <span class="text-secondary">Ab in den</span><br />
      <span class="text-secondary">neuen Job</span>
      <span class="text-primary">!</span>
    </h2>
    <Button
      text="Jetzt anmelden"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
