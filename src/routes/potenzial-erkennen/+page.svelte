<script>
  import Button from "$lib/components/Button.svelte";
  import HeaderBanner2 from "$lib/components/HeaderBanner2.svelte";
  import TwoCol from "$lib/components/TwoCol.svelte";
  import H3 from "$lib/components/H3.svelte";
  import H2 from "$lib/components/H2.svelte";
  import Contactform from "$lib/components/Contactform.svelte";
  import H1 from "$lib/components/H1.svelte";
  import Accordion from "$lib/components/Accordion.svelte";
</script>

<svelte:head>
  <title>Personalvermittlungsagentur Kassel | Gastronomie & Hotelpersonal</title
  >
  <meta
    name="description"
    content="Wir finden die passenden Mitarbeiter für Ihr Unternehmen!
    Personalvermittlung für Gastronomie und Hotelpersonal | Personalvermittlungsagentur in
    Kassel
    "
  />
</svelte:head>

<HeaderBanner2 imglink="/header-potenzial.jpg" altText="">
  <img
    class="mb-10"
    width="327"
    height="151"
    src="/aecdisc_logo.png"
    alt="aecdisc"
  />
  <div class="flex justify-start">
    <h1
      class="uppercase font-medium text-3xl sm:text-4xl sm:leading-md lg:text-6xl lg:leading-lg"
    >
      <span class="text-primary">Potenzialanalyse zur</span>
      <span class="text-secondary">Personal&shy;entwicklung</span>
    </h1>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm"
  >
    <p>
      Die AEC DISC Methode ist ein Werkzeug zur Verhaltensanalyse, das die
      Leistung von Einzelpersonen, Teams und Organisationen verbessert. Sie
      kombiniert die psychologischen Typen von Carl Jung, die DISC-Theorie von
      William Marston und die Motivatoren von Eduard Spranger und nutzt Farben
      zur einfachen Darstellung von Verhaltensweisen und Motivationen.
    </p>
  </div>
</HeaderBanner2>
<div class="gradient-bar"></div>
<div
  class="relative w-full bg-gradient-to-r from-gradient-dark to-gradient-light"
>
  <div
    class="flex flex-col md:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12"
  >
    <div class="order-2 md:order-1 basis-1/2 shrink-0 self-start">
      <img
        class="rounded-2xl border-white border-4 w-full"
        src="/vorteile-aec.jpg"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-between order-1 lg:order-2 basis-1/2">
      <h2
        class="uppercase text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md"
      >
        Vorteile der AEC DISC Methode:
      </h2>
      <ul
        class="text-white text-1xl sm:text-2xl list-disc font-light pl-8 py-8 flex flex-col space-y-4"
      >
        <li>
          <strong>Selbsterkenntnis:</strong> Sie hilft, eigene Stärken und Schwächen
          zu verstehen und sich persönlich weiterzuentwickeln.
        </li>
        <li>
          <strong>Stärkenfokus:</strong> Menschen werden nach ihren Stärken beurteilt,
          nicht nach ihren Schwächen. Dies ermöglicht die Bildung von Hochleistungsteams,
          die sich optimal ergänzen.
        </li>
        <li>
          <strong>Teamdynamik:</strong> Durch das Erkennen unterschiedlicher Profile
          verbessert sie die Kommunikation und Zusammenarbeit im Team.
        </li>
        <li>
          <strong>Effektive Rekrutierung:</strong> Sie definiert die für eine Rolle
          benötigten Fähigkeiten und sorgt für bessere Passung zwischen Kandidaten
          und Stellenanforderungen.
        </li>
        <li>
          <strong>Anpassung an Veränderungen:</strong> Sie bietet Einblicke, wie
          Menschen auf Veränderungen reagieren, und hilft, diese besser zu bewältigen.
        </li>
        <li>
          <strong>Verkauf und Kundenbeziehungen:</strong> Sie unterstützt Verkaufsteams
          dabei, ihre Verkaufsstile an verschiedene Kundenprofile anzupassen.
        </li>
      </ul>
    </div>
  </div>
</div>

<div
  class="max-w-container-12 flex flex-col justify-center m-auto py-16 px-5 xl:px-0"
>
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-4">
    <div class="flex-1 flex flex-col justify-center">
      <h2
        class="uppercase text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md"
      >
        <span class="text-primary">Integration von </span>
        <span class="text-secondary"
          >Generationsverständnis, kultureller Vielfalt</span
        >
        <span class="text-primary"> und</span>
        <span class="text-secondary">wertebasiertes Rekrutierung:</span>
      </h2>
      <div class="text-primary font-light text-1xl sm:text-2xl sm:leading-sm">
        <ul
          class="text-1xl sm:text-2xl list-disc font-light pl-8 py-8 flex flex-col space-y-4"
        >
          <li>
            Generationsverständnis: AEC DISC überbrückt generationsbedingte
            Unterschiede und fördert gegenseitigen Respekt und Zusammenarbeit.
          </li>
          <li>
            Kulturelle Vielfalt: Das Farbsystem vereinfacht komplexe kulturelle
            Verhaltensweisen und fördert Inklusivität.
          </li>
          <li>
            Wertebasierte Rekrutierung: Durch den Fokus auf Werte stellt AEC
            DISC sicher, dass neue Mitarbeiter zu den Kernwerten des
            Unternehmens passen.
          </li>
        </ul>
        <p class="text-1xl sm:text-2xl font-light pt-5 pb-5">
          Insgesamt hilft AEC DISC, menschliches Verhalten im Berufsleben besser
          zu verstehen und zu optimieren, was die individuellen und
          teambezogenen Leistungen sowie die strategische Rekrutierung und
          Entwicklung unterstützt.
        </p>
        <div class="py-10">
          <Button
            text="Jetzt Angebot anfragen"
            link="#kontakt"
            color="bg-gradient-to-r from-gradient-dark to-gradient-light"
          />
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center">
      <img
        class="w-full rounded-2xl"
        src="/generationsverstaendnis.jpg"
        alt=""
      />
    </div>
  </div>
</div>

<div
  class="relative w-full bg-gradient-to-r from-gradient-dark to-gradient-light"
>
  <div
    class="flex flex-col md:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12"
  >
    <div class="order-2 md:order-1 basis-1/2 shrink-0 self-start">
      <img
        class="rounded-2xl border-white border-4 w-full"
        src="/generationsverstaendnis2.jpg"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-between order-1 md:order-2 basis-1/2">
      <h2
        class="uppercase text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md mb-8"
      >
        Integration von Generationsenverständnis
      </h2>
      <p class="text-white text-1xl sm:text-2xl font-light">
        In der dynamischen Arbeitswelt ist es entscheidend, gut geschulte
        Recruiter zu haben, die die Bedürfnisse der Generationen X, Y und Z
        verstehen. Genau hier kommen wir von der Rent Awesome People GmbH ins
        Spiel. Wir sind darauf spezialisiert, die Werte und Erwartungen jeder
        Generation zu erkennen und darauf einzugehen.
      </p>
      <br />
      <p class="text-white text-1xl sm:text-2xl font-light">
        Generation X schätzt Stabilität, Generation Y (Millennials) fokussiert
        sich auf sinnstiftende Arbeit und Entwicklungsmöglichkeiten, und
        Generation Z legt Wert auf technologische Integration und Flexibilität.
        Bei Rent Awesome People GmbH verstehen wir diese Unterschiede und
        entwickeln maßgeschneiderte Ansätze, um die besten Talente für Ihr
        Unternehmen zu gewinnen. Auch die Benefit-Strukturen der Generationen
        können sich grundlegend unterscheiden.
      </p>
      <br />
      <p class="text-white text-1xl sm:text-2xl font-light">
        Dies können wir sowohl in der Beratung abbilden, damit Sie Inhouse die
        Stellen anpassen können oder aber auch für Sie umsetzen, sodass Sie
        zukünftig einfacher durch ein Bausteinsystem Stellen selbst optimiert
        ausschreiben können.
      </p>
    </div>
  </div>
</div>

<div
  class="max-w-container-12 flex flex-col justify-center m-auto py-16 px-5 xl:px-0"
>
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-4">
    <div class="flex-1 flex flex-col justify-center">
      <h2
        class="uppercase text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md"
      >
        <span class="text-primary">Kulturelle Vielfalt </span><br />
        <span class="text-secondary">und Diversität</span>
      </h2>
      <div class="text-primary font-light text-1xl sm:text-2xl sm:leading-sm">
        <p class="text-1xl sm:text-2xl font-light pt-5 pb-5">
          Diversität und Vielfalt in Teams im Gastgewerbe bringen zahlreiche
          Vorteile. Teams, die aus Mitgliedern unterschiedlicher Hintergründe,
          Kulturen, Erfahrungen und Fähigkeiten bestehen, sind kreativer und
          innovativer. Diese Vielfalt führt zu besseren Entscheidungen und
          effizienteren Arbeitsprozessen. Ein vielfältiges Team verbessert den
          Kundenservice erheblich. Gäste aus aller Welt fühlen sich wohler und
          besser verstanden, wenn sie von einem Team betreut werden, das ihre
          Sprache spricht und ihre kulturellen Bedürfnisse kennt. Die
          Einbeziehung von Menschen mit Behinderungen zeigt zudem, dass das
          Unternehmen Chancengleichheit und Inklusion ernst nimmt.
        </p>
        <Accordion title="Mehr erfahren">
          <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
            Offenheit für Diversität ist ein Zeichen von Respekt und
            Wertschätzung gegenüber allen Mitarbeitenden. Ein inklusives
            Arbeitsumfeld, in dem sich jede Person angenommen fühlt, erhöht
            Motivation und Zufriedenheit und stärkt die Bindung an das
            Unternehmen. Wichtig ist, dass die Aufgaben den Fähigkeiten der
            Mitarbeitenden entsprechen, sodass jede Person ihre Stärken
            einbringen kann. Insgesamt ist Diversität ein Gewinn für das
            Gastgewerbe. Sie fördert Kreativität, verbessert den Kundenservice
            und schafft ein positives Arbeitsklima. Für ein erfolgreiches
            Unternehmen ist es essenziell, Vielfalt zu fördern und
            Chancengleichheit für alle zu gewährleisten.
          </p>
        </Accordion>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/diversitaet.jpg" alt="" />
    </div>
  </div>
</div>

<div
  class="relative w-full bg-gradient-to-r from-gradient-dark to-gradient-light"
>
  <div
    class="flex flex-col md:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12"
  >
    <div class="order-2 md:order-1 basis-1/2 shrink-0 self-start">
      <img
        class="rounded-2xl border-white border-4 w-full"
        src="/rekrutierung.jpg"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-between order-1 md:order-2 basis-1/2">
      <h2
        class="uppercase text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-sm lg:leading-md mb-8"
      >
        Wertebasierte Rekrutierung
      </h2>
      <p class="text-white text-1xl sm:text-2xl font-light">
        Wertebasierte Rekrutierung im Gastgewerbe, die auf den
        Nachhaltigkeitszielen der Agenda 2030 basiert, ist für Arbeitgeber*innen
        wichtig. Sie stellt sicher, dass Mitarbeitende nicht nur die nötigen
        Fähigkeiten haben, sondern auch die gleichen Werte wie Umweltschutz und
        soziale Verantwortung teilen.
      </p>
      <br />
      <p class="text-white text-1xl sm:text-2xl font-light">
        Wenn Arbeitgeber*innen und Mitarbeitende die selben Werte haben, bringt
        das viele Vorteile. Es schafft eine einheitliche Unternehmenskultur, was
        die Motivation und Zufriedenheit der Mitarbeitenden steigert. Außerdem
        erhöht es die Glaubwürdigkeit des Unternehmens, da Gäste echte
        Nachhaltigkeit erkennen und schätzen.
      </p>
      <br />
      <p class="text-white text-1xl sm:text-2xl font-light">
        Zusammengefasst fördert die Übereinstimmung der Werte zwischen
        Mitarbeitenden und Unternehmen eine nachhaltige und verantwortungsvolle
        Geschäftstätigkeit, die der Gesellschaft und der Umwelt zugutekommt.
      </p>
      <div class="py-10">
        <Button
          text="Jetzt Termin Anfragen"
          link="#kontakt"
          color="bg-secondary"
        />
      </div>
    </div>
  </div>
</div>

<div id="kontakt" class="py-20">
  <Contactform />
</div>

<style>
  .gradient-bar {
    height: 15px;
    background: linear-gradient(
      90deg,
      rgba(221, 0, 0, 1) 0%,
      rgba(0, 0, 214, 1) 34%,
      rgba(231, 195, 0, 1) 70%,
      rgba(0, 226, 0, 1) 100%
    );
  }
</style>
