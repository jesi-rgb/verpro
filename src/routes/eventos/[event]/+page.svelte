<script lang="ts">
    import type { Event } from "$lib/types";
    import Gallery from "$lib/components/Gallery.svelte";

    interface Props {
        data: Event;
    }

    let { data }: Props = $props();
</script>

<p class="not-prose opacity-70">
    {new Date(data.date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })}
</p>

<h1>{data.name}</h1>

<p class="not-prose">{data.modality}</p>

{#if data.description}
    <p>{data.description}</p>
{/if}

{#if data.interventions && data.interventions.length}
    <h2>Intervenciones</h2>
    <ul class="not-prose space-y-6">
        {#each data.interventions as intervention}
            <li>
                <p class="text-lg leading-snug font-semibold italic">
                    {intervention.title}
                </p>
                <p class="mt-1 text-sm">
                    <span class="font-medium">{intervention.speakers}</span>
                    {#if intervention.affiliation}
                        <span> ({intervention.affiliation})</span>
                    {/if}
                </p>

            </li>
        {/each}
    </ul>
{/if}

{#if data.images && data.images.length}
    <h2>Galería</h2>
    <Gallery images={data.images} alt={data.name} />
{/if}
