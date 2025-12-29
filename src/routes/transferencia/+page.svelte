<script>
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import Activity from "$lib/components/Activity.svelte";
    import { transferenciaItems } from "$lib/transferencia";

    const podcasts = transferenciaItems.filter(
        (item) => item.type === "podcast",
    );
    const actividades = transferenciaItems.filter(
        (item) => item.type === "actividad",
    );

    const tabs = [
        {
            id: "podcasts",
            label: "Podcasts",
        },
        {
            id: "actividades",
            label: "Actividades",
        },
    ];

    let activeTab = $state("podcasts");
</script>

<h1>Transferencia y divulgación</h1>

<div class="mb-8">
    <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8">
            {#each tabs as tab (tab.id)}
                <button
                    class="py-4 px-1 border-b-2 font-medium text-sm
                    transition-colors {activeTab == tab.id
                        ? 'border-stone-300 font-extrabold hover:border-stone-500'
                        : 'border-transparent'}"
                    onclick={() => (activeTab = tab.id)}
                >
                    {tab.label}
                </button>
            {/each}
        </nav>
    </div>
</div>

{#if activeTab === "podcasts"}
    <section>
        {#each podcasts as podcast (podcast.id)}
            <AudioPlayer src={podcast.audioSrc} title={podcast.title} />
        {/each}
    </section>
{:else if activeTab === "actividades"}
    <section>
        {#each actividades as actividad (actividad.id)}
            <Activity activity={actividad} />
        {/each}
    </section>
{/if}
