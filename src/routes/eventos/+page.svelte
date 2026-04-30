<script lang="ts">
    import { events, hasDetails } from "$lib/events";

    const sorted = $derived(
        [...events].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
    );
</script>

<h1>Eventos</h1>

<section class="space-y-10">
    {#each sorted as event}
        {@const linkable = hasDetails(event)}
        <div class="not-prose">
            <p class="opacity-70">
                {new Date(event.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            {#if linkable}
                <a href="/eventos/{event.id}" class="group inline-block">
                    <h2
                        class="text-3xl font-bold group-hover:underline group-hover:text-stone-600 transition-colors"
                    >
                        {event.name}
                    </h2>
                </a>
            {:else}
                <h2 class="text-3xl font-bold">{event.name}</h2>
            {/if}
            <p>{event.modality}</p>
            {#if linkable}
                <a
                    href="/eventos/{event.id}"
                    class="group mt-3 inline-flex items-center gap-1.5 rounded-full border border-stone-400 px-4 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-700 hover:bg-stone-700 hover:text-white"
                >
                    Más detalles
                    <span
                        class="inline-block transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true">→</span
                    >
                </a>
            {/if}
        </div>
    {/each}
</section>
