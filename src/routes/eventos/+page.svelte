<script lang="ts">
    const eventList = [
        {
            name: "Primer seminario de trabajo",
            date: "2024/11/4",
            modality: "Modalidad virtual",
        },
        {
            name: "Segundo seminario de trabajo",
            date: "2025/6/2",
            modality: "Modalidad virtual",
        },
    ];

    const events = $derived(
        eventList.sort((b, a) => {
            return new Date(a.date) - new Date(b.date);
        }),
    );
</script>

<h1>Eventos</h1>

<section class="space-y-10">
    {#each events as event}
        <div class="not-prose">
            <p class="opacity-70">
                {new Date(event.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            <h2 class="text-3xl font-bold">{event.name}</h2>
            <p>{event.modality}</p>
        </div>
    {/each}
</section>
