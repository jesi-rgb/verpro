<script>
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
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

    let activeTab = "podcasts";
</script>

<h1>Transferencia y divulgación</h1>

<div class="mb-8">
    <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8">
            {#each tabs as tab}
                <button
                    class="py-4 px-1 border-b-2 font-medium text-sm
                    transition-colors {activeTab == tab.id
                        ? 'border-stone-300 font-extrabold hover:border-stone-500'
                        : 'border-transparent'}"
                    on:click={() => (activeTab = tab.id)}
                >
                    {tab.label}
                </button>
            {/each}
        </nav>
    </div>
</div>

{#if activeTab === "podcasts"}
    <section>
        {#each podcasts as podcast}
            <AudioPlayer src={podcast.audioSrc} title={podcast.title} />
        {/each}
    </section>
{:else if activeTab === "actividades"}
    <section>
        {#each actividades as actividad}
            {#if actividad.url}
                <a
                    href={actividad.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block mb-8 px-6 py-4 backdrop-blur-md no-underline border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
                >
                    <h3
                        class="text-xl font-semibold mb-3"
                        style="margin-top: 0;"
                    >
                        {actividad.title}
                    </h3>
                    {#if actividad.organizer}
                        <p class="text-stone-500 mb-2">{actividad.organizer}</p>
                    {/if}
                    <div class=" font-normal space-y-1">
                        <p>
                            <strong>Fecha y hora:</strong>
                            {actividad.date.toLocaleDateString("es-ES", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })} h
                        </p>
                        {#if actividad.location}
                            <p><strong>Lugar:</strong> {actividad.location}</p>
                        {/if}
                        {#if actividad.audience}
                            <p>
                                <strong>Dirigido a:</strong>
                                {actividad.audience}
                            </p>
                        {/if}
                    </div>
                </a>
            {:else}
                <article
                    class="mb-8 px-6 py-4 backdrop-blur-md border border-gray-200 rounded-lg"
                >
                    <h3
                        class="text-xl font-semibold mb-3"
                        style="margin-top: 0;"
                    >
                        {actividad.title}
                    </h3>
                    {#if actividad.organizer}
                        <p class="text-gray-700 mb-2">{actividad.organizer}</p>
                    {/if}
                    <div class="text-gray-600 space-y-1">
                        <p>
                            <strong>Fecha y hora:</strong>
                            {actividad.date.toLocaleDateString("es-ES", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })} h
                        </p>
                        {#if actividad.location}
                            <p><strong>Lugar:</strong> {actividad.location}</p>
                        {/if}
                        {#if actividad.audience}
                            <p>
                                <strong>Dirigido a:</strong>
                                {actividad.audience}
                            </p>
                        {/if}
                    </div>
                </article>
            {/if}
        {/each}
    </section>
{/if}
