<script>
  import Button from "$lib/components/Button.svelte";
  import HeaderBanner from "$lib/components/HeaderBanner.svelte";
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
<HeaderBanner imglink="/Header-Arbeitgeber.png">
  <div>
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
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 sm:leading-sm">
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
  </div>
  <div class="py-10 flex">
    <Button
      text="Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>
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
        schlägt mein Herz für die Gastronomie. Gästen ihre Wünsche von den Augen
        abzulesen ist eine meiner Superkräfte.
      </p>
      <br />
      <p>
        Ich habe von der Festzeltgastronomie bis zum 4 Sterne superior Haus
        alles geliebt und mich an die Gegebenheiten angepasst und durfte von
        ganz fantastischen Kolleg:innen lernen.
      </p>
      <br />
      <p>
        Vor 10 Jahren begann meine Reise hinter die Kulissen. 8 Jahre auf einem
        Kreuzfahrtschiff, danach in einer Zeitarbeitsfirma. Gute Mitarbeitende
        brauchen gute Arbeitgebende, um ihr Potenzial voll auszuschöpfen! Werden
        Sie ein Teil der Revolution im Gastgewerbe!
      </p>
    </div>
  </div>
</div>
<Contactform />
<div class="px-5 pb-5 pt-8 lg:pt-12 lg:w-8/12 m-auto">
    <div class="text-primary font-light text-1xl sm:text-2xl">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Ihr Partner für die Hotelpersonalvermittlung Kassel
      </h3>
      <p>
        Viele kleine Unternehmen haben oft mit dem Finden neuer Mitarbeiter zu
        kämpfen, wenn sie sich in der Wachstumsphase befinden und noch nie eine
        Agentur in Anspruch genommen haben. Der erste Impuls ist häufig, die
        größte Agentur anzurufen, weil sie scheinbar die Besten sind. Häufig
        zeigt sich dann aber schnell, dass der gewählte Vermittler nicht mit der
        nötigen Sorgfalt vorgeht oder nur einen eingeschränkten Einblick in die
        Branche hat. Wer die Einheitsgröße wählt, bekommt eben auch
        Einheitsgröße geliefert. Bei der Suche nach passendem Personal ist das
        allerdings der falsche Ansatz. Wenn es um Hotelpersonalvermittlung
        Kassel und Vermittlung Serviceroboter Kassel geht, sollten Sie sich
        Ihren Vermittler mit Sorgfalt aussuchen. Große Personalagenturen können
        vielleicht vielen Menschen gleichzeitig helfen. Wenn Sie Interesse daran
        haben, das beste Personal für Ihr Unternehmen zu finden, sollten Sie
        sich allerdings lieber eine kleinere Agentur suchen, welche auf Ihre
        Branche spezialisiert ist und Sie engmaschig betreuen kann. Service,
        Arbeitsweise und Betreuung können von Agentur zu Agentur stark
        schwanken. Es schadet also nicht, bei der Auswahl wählerisch zu sein und
        bedacht vorzugehen.
      </p>
    </div>

    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Große oder kleine Agenturen für die Vermittlung Serviceroboter Kassel?
      </h3>
      <p>
        Wie bereits erwähnt: Gehen Sie nicht immer davon aus, dass eine große
        Agentur die beste Wahl für Sie darstellt. Häufig kann die Erfahrung mit
        einer sehr großen Agentur frustrierend sein. Je mehr Kunden die Agentur
        betreut und je mehr Branchen sie bedient, umso schwieriger wird es, die
        Kunden auch wirklich umfassend und angemessen zu beraten. Zudem sind
        große Agenturen weniger spezialisiert. Eine kleinere Agentur
        konzentriert sich meistens auf wenige, verwandte Branchen. Die
        Mitarbeiter kennen die Branche, haben einen guten Einblick und viele
        Jahre Erfahrung. Zudem sind sie oft gut verknüpft und kennen den
        aktuellen Markt. Je mehr Branchen eine große Agentur bedient, umso
        weniger Einblick hat sie in diese Bereiche. Durch die geringere
        Übersicht und wenig Spezialisierung ist es auch wahrscheinlicher, dass
        die Vermittlung nicht optimal gewährleistet wird und die besten
        Kandidaten für Ihr Unternehmen gar nicht bei Ihnen landen. Wohin wird
        sich ein Bewerber wenden, der nicht gut betreut wird? An eine kleinere,
        spezialisierte Agentur, die sich gut um ihn kümmert und seine Branche
        kennt. Sie sollten bei der Auswahl des Vermittlers somit weniger auf
        Größe und Reichweite der Agentur achten. Viel wichtiger ist es, dass die
        Agentur sich auf Ihre Branche spezialisiert hat und wirklich gute Arbeit
        leistet. Aber wie können Sie das herausfinden? Hier sind einige
        Faktoren, die Sie bei der Auswahl Ihres Vermittlers beachten sollten:
      </p>
    </div>

  
    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Erfahrung und Expertise
      </h3>
      <p>
        Erfahrung und Expertise Es ist wichtig, dass die Personalagentur über
        die entsprechende Erfahrung bezüglich der Mitarbeitergewinnung in Ihrer
        Branche verfügt. Außerdem sollten die Bewerber reibungslos durch den
        Prozess geführt werden und sich gut aufgehoben fühlen. Hier ist es ein
        großer Vorteil, wenn Sie eine Agentur wählen, die sich bereits gut in
        Ihrer Branche auskennt und langjährige Erfahrung mitbringt. So ist eine
        reibungslose Kommunikation und ein guter Umgang gewährleistet. Die
        Mitarbeiter der Agentur kennen die Sprache und die Umgangsweise der
        Branche und können sich viel besser in die Bewerber hineinversetzen. So
        entsteht eine gute Beziehung zu den Bewerbern und die Vermittler können
        gut abschätzen, welche Mitarbeiter gut zu Ihrem Unternehmen passen.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Referenzen überprüfen
      </h3>
      <p>
        Wenn Sie mit einem Vermittler zusammenarbeiten, geschieht das im
        Optimalfall über einen längeren Zeitraum. Deshalb sollten Sie die
        Agentur, mit der Sie arbeiten möchten, prüfen und sich gut mit ihr
        auseinandersetzen, denn ein guter Vermittler kann einen maßgeblichen
        Unterschied machen. Sehen Sie sich unbedingt die Referenzen Ihres
        Vermittlers an und machen Sie sich ein umfassendes Bild. Die Beziehung
        zu Bewerbern und anderen Unternehmen kann Ihnen zeigen, wie gut der
        Vermittler sich um seine Kunden kümmert und ob er der richtige Partner
        für die Hotelpersonalvermittlung Kassel ist.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Markenidentität und Professionalität
      </h3>
      <p>
        Am Auftreten des Vermittlers können Sie oft erkennen, ob Ihr Vermittler
        eine etablierte Marke ist und wie professionell er arbeitet. Dafür
        können Sie sich die Website und die visuelle Darstellung der Agentur
        ansehen. Achten Sie auf eine professionelle Website mit einer
        einheitlichen Bildsprache, ein professionelles Logo und eine hochwertige
        Gestaltung von Informationsmaterial. Sie sind Indikatoren für den Grad
        der Professionalität Ihres Vermittlers. Besonders die Website sollte
        dabei im Fokus stehen. Sie liefert die Plattform für Interaktionen und
        ist das digitale Aushängeschild des Unternehmens. Wenn Sie auf der
        Website bereits gut navigieren können, sich angesprochen fühlen und
        einen guten Eindruck haben, ist das ein gutes Zeichen. Sie sollten den
        Vermittler kontaktieren und sehen, ob er zu Ihnen passt.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Image und Ruf
      </h3>
      <p>
        Die Website ist immer ein guter erster Schritt, um mehr über einen
        Vermittler zu erfahren. Achten Sie auch darauf, was Sie sonst noch über
        Ihren Vermittler finden können. Das kann ein Zeitungsartikel sein,
        Auftritte in den sozialen Medien oder der Ruf in der Branche.
        Mundpropaganda ist meist die persönlichste und detaillierteste
        Möglichkeit, um ein Bild von der Professionalität und Arbeitsweise des
        Vermittlers zu bekommen. Beachten Sie hier, dass es nicht ausschließlich
        um den Ruf der Agentur selbst, sondern auch um den Ruf der einzelnen
        Mitarbeiter geht. Wenn Sie jemanden kennen, der bereits mit diesem
        Vermittler gearbeitet hat, fragen Sie unbedingt nach der persönlichen
        Erfahrung und machen Sie sich ein Bild. Ihr eigener Ruf spielt hier auch
        eine Rolle. Je nachdem, welchen Ruf Sie haben, werden sich auch
        unterschiedlich viele Bewerber mit verschiedenen Eigenschaften bei Ihnen
        melden. Wenn Ihre Mitarbeiter zufrieden sind und es bekannt ist, dass
        Sie gut mit Ihren Beschäftigten umgehen, steigen Ihre Chancen auf
        qualifizierte und passende Bewerber.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Informationen vorab
      </h3>
      <p>
        Ein guter Personalvermittler ist in der Regel bereit, gute, informative
        und ehrliche Ratschläge zu geben und vorausschauend zu arbeiten. Wenn
        Sie Fragen bezüglich der Zusammenarbeit haben, sollten Sie diese
        unbedingt so früh wie möglich stellen. Es gibt viele maßgebliche
        Faktoren für eine funktionierende und hochwertige Zusammenarbeit.
        Bringen Sie unbedingt in Erfahrung, wie genau der Prozess abläuft und
        welche Tätigkeiten in Ihren Verantwortungsbereich fallen. Stellen Sie
        auch alle sonstigen Fragen rund um die Zusammenarbeit und Ihren
        Vermittler. Eine gute Agentur wird sich schnell und gewissenhaft darum
        kümmern, Ihnen diese Informationen bereitzustellen und mit Ihnen in
        Kontakt zu stehen. Bereits hier können Sie gute und weniger gute
        Agenturen unterscheiden. Kommunikation ist schließlich das Geschäft der
        Vermittler. Wenn gewisse Dinge nicht ganz klar sind oder sie etwas
        ausführlicher mit dem Vermittler sprechen wollen, fragen Sie nach einem
        persönlichen Gespräch oder Telefonat. Gute Vermittler nehmen sich Zeit
        für solche Gespräche und werden ihr Bestes tun, um jegliche Fragen
        bezüglich der Hotelpersonalvermittlung Kassel und der Vermittlung
        Serviceroboter Kassel zu klären.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Starke Kommunikation
      </h3>
      <p>
        Wenn eine Personalagentur schnell und gewissenhaft auf Anfragen
        antwortet und klar kommuniziert, ist das ein Zeichen für einen guten
        Vermittler. Wer im Kommunikations-Geschäft tätig ist, muss es auch
        beherrschen. Achten Sie schon von Beginn an auf die Art der
        Kommunikation, um so schnell wie möglich einen guten Vermittler zu
        erkennen.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Die Mitarbeiter der Agentur
      </h3>
      <p>
        Die Mitarbeiter der Agentur Die Art und Weise, wie die Mitarbeiter der
        Agentur arbeiten, spiegeln das Image und die Grundsätze des Unternehmens
        wider. Eine gute Agentur legt Wert auf eine professionelle Arbeitsweise
        und gute Vermittler. Die Mitarbeiter einer guten Agentur werden in der
        Kommunikation und während des gesamten Prozesses immer professionell
        bleiben und eine angemessene Art der Kommunikation wählen. Dazu gehören
        auch die richtige Ausdrucksweise und die Kombination von Freundlichkeit
        und professioneller Distanz. Sie kennen die Branche, die Mitarbeiter und
        die Unternehmen, die sie betreuen, ganz genau. So finden sie die besten
        Bewerber für Ihr Unternehmen und garantieren eine engmaschige Betreuung.
        Eine gute Agentur können Sie bereits an Ihrem Gesprächspartner erkennen.
      </p>
    </div>


    <div class="text-primary font-light text-1xl sm:text-2xl pt-4">
      <h3 class="text-primary sm:text-3xl text-xl flex pb-2 align-middle font-normal">
        Suchen Sie awesome People für Ihr Unternehmen?
      </h3>
      <p>
        Sind Sie auf der Suche nach den besten Bewerbern für Ihr Unternehmen?
        Suchen Sie einen Partner für die Hotelpersonalvermittlung Kassel oder
        Vermittlung Serviceroboter Kassel? Awesome! Dann sind Sie hier genau
        richtig! Melden Sie sich einfach bei uns, dann können wir uns in einem
        persönlichen Gespräch kennenlernen. Wir freuen uns drauf!
      </p>
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
