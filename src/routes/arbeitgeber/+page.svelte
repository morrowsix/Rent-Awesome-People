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
  <title>Hotelpersonalvermittlung & Vermittlung Serviceroboter Kassel</title>
  <meta
    name="description"
    content="Sie suchen die passenden Arbeitskräfte für Ihr Unternehmen? Wir finden Sie! Hotelpersonalvermittlung und Serviceroboter Vermittlung in Kassel" />
</svelte:head>
<HeaderBanner2 imglink="/arbeitgeber-header.jpg" altText="Bea und Karo im Cafe">
  <div class="flex justify-start">
    <H2>
      <span class=" text-primary">Glückliche</span><br />
      <span class=" text-primary">mitarbeitende +</span><br />
      <span class="text-secondary">Glückliche Gäste</span><span
        class=" text-primary">=</span
      ><br />
      <span class="text-primary">Glücklicher </span><span
        class="text-secondary">
        Chef</span
      ><span class="text-primary">.</span>
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
    <H1 small
      >Hotel&shy;personalvermittlung & Serviceroboter Vermittlung in Kassel
    </H1>
    <p>
      Wie würde es sich für Sie anfühlen, wenn Sie sich keine Gedanken mehr
      darum machen müssten, wo Sie Ihr Personal herbekommen? Gut? Dann sollten
      wir uns kennenlernen. Wir nehmen Ihnen diese Sorge ab! - Eine Garantie
      können wir nur dann geben, wenn Sie gewillt sind über den Tellerrand
      hinaus zu schauen. Alles andere wäre unseriös!
    </p>
    <div class="py-10 flex">
      <Button
        text="Kontakt aufnehmen"
        link="/kontakt"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div></HeaderBanner2>
<TwoCol>
  <div slot="left" class="max-w-container-6 flex-1 pr-5 lg:pr-20">
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
    class="max-w-container-6 flex-1 pl-5 xl:pl-16 flex flex-col">
    <H3>Direktvermittlung <br /> durch uns!</H3>
    <ul
      class="font-light list-disc list-inside ml-4 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Passgenaues Recruiting</li>
      <li>Fachkräfte aus der Umgebung und aus dem Ausland</li>
      <li>Begleitung im Onboarding-Prozess</li>
    </ul>
  </div>
</TwoCol>
<!-- Section Mein Gastroherz -->
<div class="relative w-full">
  <div
    class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12">
    <div
      class="order-2 lg:order-1 basis-full lg:basis-1/2 shrink-0 self-start lg:self-center">
      <img
        class="w-full rounded-2xl"
        src="/mein-gastroherz.jpg"
        alt="Beatrix spaziert in Kassel." />
    </div>
    <div
      class="flex flex-col justify-between order-1 lg:order-2 basis-full w-full lg:basis-1/2">
      <H3>
        <span class=" text-primary">Mein Gastroherz</span><br />
        <span class=" text-secondary">Ihr Vorteil</span><span>!</span>
      </H3>
      <div
        class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
        <p>
          Seit über 25 Jahren bin ich in der Gastronomie unterwegs. 1994 hatte
          ich meinen ersten Gastrojob in einem Bierwagen auf einem Volksfest.
          Seit dem schlägt mein Herz für die Gastronomie. Gästen ihre Wünsche
          von den Augen abzulesen ist eine meiner Superkräfte.
        </p>
        <br />
        <p>
          Ich habe von der Festzeltgastronomie bis zum 4 Sterne superior Haus
          alles geliebt und mich an die Gegebenheiten angepasst und durfte von
          ganz fantastischen Kolleg:innen lernen.
        </p>
        <br />
        <p>
          Vor 10 Jahren begann meine Reise hinter die Kulissen. 8 Jahre auf
          einem Kreuzfahrtschiff, danach in einer Zeitarbeitsfirma. Gute
          Mitarbeitende brauchen gute Arbeitgebende, um ihr Potenzial voll
          auszuschöpfen! Werden Sie ein Teil der Revolution im Gastgewerbe!
        </p>
      </div>
    </div>
  </div>
</div>
<Contactform />

<!-- SEO Texte -->
<div
  class="max-w-container-12 flex flex-col justify-center m-auto py-16 px-5 xl:px-0">
  <!-- Ihr Partner für die Hotelpersonalvermittlung Kassel -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-4">
    <div class=" flex-1 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Ihr</span>
        <span class="text-secondary">Partner</span>
        <span class="text-primary"
          >für die Hotelpersonalvermittlung Kassel</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Viele kleine Unternehmen haben oft mit dem Finden neuer Mitarbeiter zu
        kämpfen, wenn sie sich in der Wachstumsphase befinden und noch nie eine
        Agentur in Anspruch genommen haben. Der erste Impuls ist häufig, die
        größte Agentur anzurufen, weil sie scheinbar die Besten sind.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Häufig zeigt sich dann aber schnell, dass der gewählte Vermittler
          nicht mit der nötigen Sorgfalt vorgeht oder nur einen eingeschränkten
          Einblick in die Branche hat. Wer die Einheitsgröße wählt, bekommt eben
          auch Einheitsgröße geliefert. Bei der Suche nach passendem Personal
          ist das allerdings der falsche Ansatz. Wenn es um
          Hotelpersonalvermittlung Kassel und Vermittlung Serviceroboter Kassel
          geht, sollten Sie sich Ihren Vermittler mit Sorgfalt aussuchen. Große
          Personalagenturen können vielleicht vielen Menschen gleichzeitig
          helfen. Wenn Sie Interesse daran haben, das beste Personal für Ihr
          Unternehmen zu finden, sollten Sie sich allerdings lieber eine
          kleinere Agentur suchen, welche auf Ihre Branche spezialisiert ist und
          Sie engmaschig betreuen kann. Service, Arbeitsweise und Betreuung
          können von Agentur zu Agentur stark schwanken. Es schadet also nicht,
          bei der Auswahl wählerisch zu sein und bedacht vorzugehen.
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/6.png" alt="" />
    </div>
  </div>
  <!-- Große oder kleine Agenturen für die Vermittlung Serviceroboter Kassel? -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/3.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Große oder kleine</span>
        <span class="text-secondary">Agenturen</span>
        <span class="text-primary"
          >für die Vermittlung Serviceroboter Kassel?</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Wie bereits erwähnt: Gehen Sie nicht immer davon aus, dass eine große
        Agentur die beste Wahl für Sie darstellt. Häufig kann die Erfahrung mit
        einer sehr großen Agentur frustrierend sein. Je mehr Kunden die Agentur
        betreut und je mehr Branchen sie bedient, umso schwieriger wird es, die
        Kunden auch wirklich umfassend und angemessen zu beraten. Zudem sind
        große Agenturen weniger spezialisiert.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Eine kleinere Agentur konzentriert sich meistens auf wenige, verwandte
          Branchen. Die Mitarbeiter kennen die Branche, haben einen guten
          Einblick und viele Jahre Erfahrung. Zudem sind sie oft gut verknüpft
          und kennen den aktuellen Markt. Je mehr Branchen eine große Agentur
          bedient, umso weniger Einblick hat sie in diese Bereiche. Durch die
          geringere Übersicht und wenig Spezialisierung ist es auch
          wahrscheinlicher, dass die Vermittlung nicht optimal gewährleistet
          wird und die besten Kandidaten für Ihr Unternehmen gar nicht bei Ihnen
          landen. Wohin wird sich ein Bewerber wenden, der nicht gut betreut
          wird? An eine kleinere, spezialisierte Agentur, die sich gut um ihn
          kümmert und seine Branche kennt. Sie sollten bei der Auswahl des
          Vermittlers somit weniger auf Größe und Reichweite der Agentur achten.
          Viel wichtiger ist es, dass die Agentur sich auf Ihre Branche
          spezialisiert hat und wirklich gute Arbeit leistet. Aber wie können
          Sie das herausfinden? Hier sind einige Faktoren, die Sie bei der
          Auswahl Ihres Vermittlers beachten sollten:
        </p>
      </Accordion>
    </div>
  </div>
  <!-- Erfahrung und Expertise -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3>
        <span class="text-secondary">Erfahrung</span>
        <span class="text-primary">und</span>
        <span class="text-secondary">Expertise</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Erfahrung und Expertise Es ist wichtig, dass die Personalagentur über
        die entsprechende Erfahrung bezüglich der Mitarbeitergewinnung in Ihrer
        Branche verfügt. Außerdem sollten die Bewerber reibungslos durch den
        Prozess geführt werden und sich gut aufgehoben fühlen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Hier ist es ein großer Vorteil, wenn Sie eine Agentur wählen, die sich
          bereits gut in Ihrer Branche auskennt und langjährige Erfahrung
          mitbringt. So ist eine reibungslose Kommunikation und ein guter Umgang
          gewährleistet. Die Mitarbeiter der Agentur kennen die Sprache und die
          Umgangsweise der Branche und können sich viel besser in die Bewerber
          hineinversetzen. So entsteht eine gute Beziehung zu den Bewerbern und
          die Vermittler können gut abschätzen, welche Mitarbeiter gut zu Ihrem
          Unternehmen passen.
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/8.png" alt="" />
    </div>
  </div>
  <!-- Referenzen überprüfen -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/4.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3>
        <span class="text-secondary">Referenzen</span>
        <span class="text-primary">überprüfen</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Wenn Sie mit einem Vermittler zusammenarbeiten, geschieht das im
        Optimalfall über einen längeren Zeitraum. Deshalb sollten Sie die
        Agentur, mit der Sie arbeiten möchten, prüfen und sich gut mit ihr
        auseinandersetzen, denn ein guter Vermittler kann einen maßgeblichen
        Unterschied machen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Sehen Sie sich unbedingt die Referenzen Ihres Vermittlers an und
          machen Sie sich ein umfassendes Bild. Die Beziehung zu Bewerbern und
          anderen Unternehmen kann Ihnen zeigen, wie gut der Vermittler sich um
          seine Kunden kümmert und ob er der richtige Partner für die
          Hotelpersonalvermittlung Kassel ist.
        </p>
      </Accordion>
    </div>
  </div>
  <!-- Markenidentität und Professionalität -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3>
        <span class="text-secondary">Markenidentität</span>
        <span class="text-primary">und</span>
        <span class="text-secondary">Professionalität</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Am Auftreten des Vermittlers können Sie oft erkennen, ob Ihr Vermittler
        eine etablierte Marke ist und wie professionell er arbeitet. Dafür
        können Sie sich die Website und die visuelle Darstellung der Agentur
        ansehen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Achten Sie auf eine professionelle Website mit einer einheitlichen
          Bildsprache, ein professionelles Logo und eine hochwertige Gestaltung
          von Informationsmaterial. Sie sind Indikatoren für den Grad der
          Professionalität Ihres Vermittlers. Besonders die Website sollte dabei
          im Fokus stehen. Sie liefert die Plattform für Interaktionen und ist
          das digitale Aushängeschild des Unternehmens. Wenn Sie auf der Website
          bereits gut navigieren können, sich angesprochen fühlen und einen
          guten Eindruck haben, ist das ein gutes Zeichen. Sie sollten den
          Vermittler kontaktieren und sehen, ob er zu Ihnen passt.
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/1.png" alt="" />
    </div>
  </div>

  <!-- Image und Ruf -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/10.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3>
        <span class="text-secondary">Image</span>
        <span class="text-primary">und</span>
        <span class="text-secondary">Ruf</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Die Website ist immer ein guter erster Schritt, um mehr über einen
        Vermittler zu erfahren. Achten Sie auch darauf, was Sie sonst noch über
        Ihren Vermittler finden können. Das kann ein Zeitungsartikel sein,
        Auftritte in den sozialen Medien oder der Ruf in der Branche.
        Mundpropaganda ist meist die persönlichste und detaillierteste
        Möglichkeit, um ein Bild von der Professionalität und Arbeitsweise des
        Vermittlers zu bekommen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Beachten Sie hier, dass es nicht ausschließlich um den Ruf der Agentur
          selbst, sondern auch um den Ruf der einzelnen Mitarbeiter geht. Wenn
          Sie jemanden kennen, der bereits mit diesem Vermittler gearbeitet hat,
          fragen Sie unbedingt nach der persönlichen Erfahrung und machen Sie
          sich ein Bild. Ihr eigener Ruf spielt hier auch eine Rolle. Je
          nachdem, welchen Ruf Sie haben, werden sich auch unterschiedlich viele
          Bewerber mit verschiedenen Eigenschaften bei Ihnen melden. Wenn Ihre
          Mitarbeiter zufrieden sind und es bekannt ist, dass Sie gut mit Ihren
          Beschäftigten umgehen, steigen Ihre Chancen auf qualifizierte und
          passende Bewerber.
        </p>
      </Accordion>
    </div>
  </div>
  <!-- Informationen vorab -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3>
        <span class="text-secondary">Informationen</span>
        <span class="text-primary">vorab</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Ein guter Personalvermittler ist in der Regel bereit, gute, informative
        und ehrliche Ratschläge zu geben und vorausschauend zu arbeiten. Wenn
        Sie Fragen bezüglich der Zusammenarbeit haben, sollten Sie diese
        unbedingt so früh wie möglich stellen. Es gibt viele maßgebliche
        Faktoren für eine funktionierende und hochwertige Zusammenarbeit.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Bringen Sie unbedingt in Erfahrung, wie genau der Prozess abläuft und
          welche Tätigkeiten in Ihren Verantwortungsbereich fallen. Stellen Sie
          auch alle sonstigen Fragen rund um die Zusammenarbeit und Ihren
          Vermittler. Eine gute Agentur wird sich schnell und gewissenhaft darum
          kümmern, Ihnen diese Informationen bereitzustellen und mit Ihnen in
          Kontakt zu stehen. Bereits hier können Sie gute und weniger gute
          Agenturen unterscheiden. Kommunikation ist schließlich das Geschäft
          der Vermittler. Wenn gewisse Dinge nicht ganz klar sind oder sie etwas
          ausführlicher mit dem Vermittler sprechen wollen, fragen Sie nach
          einem persönlichen Gespräch oder Telefonat. Gute Vermittler nehmen
          sich Zeit für solche Gespräche und werden ihr Bestes tun, um jegliche
          Fragen bezüglich der Hotelpersonalvermittlung Kassel und der
          Vermittlung Serviceroboter Kassel zu klären.
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/12.png" alt="" />
    </div>
  </div>
  <!-- Starke Kommunikation -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/11.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3>
        <span class="text-primary">Starke</span>
        <span class="text-secondary">Kommunikation</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Wenn eine Personalagentur schnell und gewissenhaft auf Anfragen
        antwortet und klar kommuniziert, ist das ein Zeichen für einen guten
        Vermittler. Wer im Kommunikations-Geschäft tätig ist, muss es auch
        beherrschen. Achten Sie schon von Beginn an auf die Art der
        Kommunikation, um so schnell wie möglich einen guten Vermittler zu
        erkennen.
      </p>
    </div>
  </div>
  <!-- Die Mitarbeiter der Agentur -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3>
        <span class="text-primary">Die</span>
        <span class="text-secondary">Mitarbeiter</span>
        <span class="text-primary">der Agentur</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Die Mitarbeiter der Agentur Die Art und Weise, wie die Mitarbeiter der
        Agentur arbeiten, spiegeln das Image und die Grundsätze des Unternehmens
        wider. Eine gute Agentur legt Wert auf eine professionelle Arbeitsweise
        und gute Vermittler.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Die Mitarbeiter einer guten Agentur werden in der Kommunikation und
          während des gesamten Prozesses immer professionell bleiben und eine
          angemessene Art der Kommunikation wählen. Dazu gehören auch die
          richtige Ausdrucksweise und die Kombination von Freundlichkeit und
          professioneller Distanz. Sie kennen die Branche, die Mitarbeiter und
          die Unternehmen, die sie betreuen, ganz genau. So finden sie die
          besten Bewerber für Ihr Unternehmen und garantieren eine engmaschige
          Betreuung. Eine gute Agentur können Sie bereits an Ihrem
          Gesprächspartner erkennen.
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/9.png" alt="" />
    </div>
  </div>
  <!-- Suchen Sie awesome People für Ihr Unternehmen? -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/5.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3>
        <span class="text-primary">Suchen Sie</span>
        <span class="text-secondary">awesome</span>
        <span class="text-primary">People für Ihr Unternehmen?</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Sind Sie auf der Suche nach den besten Bewerbern für Ihr Unternehmen?
        Suchen Sie einen Partner für die Hotelpersonalvermittlung Kassel oder
        Vermittlung Serviceroboter Kassel? Awesome! Dann sind Sie hier genau
        richtig! Melden Sie sich einfach bei uns, dann können wir uns in einem
        persönlichen Gespräch kennenlernen. Wir freuen uns drauf!
      </p>
    </div>
  </div>
</div>


<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Footer-Banner-Arbeitgeber.png)] bg-cover bg-center h-[500px] flex justify-center items-center mt-10">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-center items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Wir finden,</span><br />
      <span class="text-secondary">was Sie brauchen.</span>
    </H2>
    <div class="pt-5" />
    <Button
      text="Kostenloses Erstgespräch vereinbaren"
      link="mailto:info@rent-awesome-people.de?subject=Kostenloses Erstgespräch vereinbaren"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
