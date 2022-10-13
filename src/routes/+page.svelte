<script>
    import Herocard from "./Herocard.svelte";
    let heroes = [
        { name: "Küchenmagier", imgurl: "/Kuechenmagier.png" },
        { name: "Empfangselfen", imgurl: "/Empfangselfen.png" },
        { name: "Servicehelden", imgurl: "/Servicehelden.png" },
        { name: "Reinigungsninjas", imgurl: "/Reinigungsninjas.png" },
        { name: "Backofficezauberer", imgurl: "/Backofficezauberer.png" },
    ];
</script>

<div
    class="w-full h-[300px] bg-gradient-to-r from-gradient-dark to-gradient-light">
    <div class="max-w-container h-[300px] flex justify-between m-auto">
        <div class="self-end">
            <img src="/beatrix-westphal.png" alt="Beatrix Westphal" class="" />
        </div>
        <div class="basis-2/5 self-center">
            <p class="text-white block">
                “Die Liebe zur Gastronomie und Hotellerie entwickelte sich in
                meiner Jugend. Die Leidenschaft für gute Arbeitsbedingungen im
                Laufe meines Arbeitslebens. Die Liebe zu Menschen wurde mir in
                die Wiege gelegt - also fühle ich mich dazu verpflichtet dies
                alles für Sie im besten Sinne zu verbinden.”
            </p><br>
            <li class="text-white">Beatrix Westphal</li>
        </div>
        <div class="self-center">
            <p class="text-white text-center font-semibold uppercase">
                Beratung für:
            </p>
        </div>
    </div>
</div>
<div class=" flex justify-around max-w-container m-auto">
    {#each heroes as hero}
        <Herocard name={hero.name} imgurl={hero.imgurl} />
    {/each}
</div>
