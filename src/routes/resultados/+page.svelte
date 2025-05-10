<script>
    const resultados = [
        {
            author: "Enrique Pato",
            title: "Verbos de posesión, adquisición y transferencia y sujetos no canónicos",
            description:
                "Conferencia impartida en el IV Encuentro Internacional ALTYA, celebrado en la Universidad de Jaén los días 28 de abril y 8 de mayo de 2025.",
        },
        {
            author: "Carmen Conti Jiménez",
            title: "Verbos de cambio en español. Alternancia causativa-anticausativa, estructura argumental y unión de predicados subclausales en la Gramática del Papel y la Referencia (RRG)",
            description:
                "Comunicación presentada en el LIII Simposio Internacional de la Sociedad Española de Lingüística, celebrado en Salamanca del 20 al 23 de enero de 2025.",
        },
    ];
</script>

<h1>Resultados</h1>

<section class="space-y-10">
    {#each resultados as { author, title, description }}
        <div
            class="card border border-stone-700/10 rounded-xl border-primary px-7 backdrop-blur-lg bg-white/1"
        >
            <h3>{author}</h3>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    {/each}
</section>
