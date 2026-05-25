<script lang="ts">
	import type { TransferenciaItem } from "$lib/types";

	interface Props {
		data: TransferenciaItem;
	}

	let { data }: Props = $props();
	let selectedImage = $state<string | null>(null);

	function openImage(image: string) {
		selectedImage = image;
	}

	function closeImage() {
		selectedImage = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closeImage();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<h1>{data.title}</h1>

{#if data.organizer}
	<p class="text-lg text-stone-600 mb-6">{data.organizer}</p>
{/if}

<article class="space-y-6">
	<p>
		<strong>Fecha y hora:</strong>
		{data.date.toLocaleDateString("es-ES", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		})} h
	</p>
	{#if data.location}
		<p><strong>Lugar:</strong> {data.location}</p>
	{/if}
	{#if data.audience}
		<p><strong>Dirigido a:</strong> {data.audience}</p>
	{/if}

	{#if data.description}
		<div class="">
			<p>{data.description}</p>
		</div>
	{/if}

	{#if data.sessions && data.sessions.length > 0}
		<div>
			<strong>Sesiones:</strong>
			<ul class="list-disc list-inside mt-2">
				{#each data.sessions as session}
					<li>
						{session.name}: {new Date(
							session.date,
						).toLocaleDateString("es-ES", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</li>
				{/each}
			</ul>
		</div>

		{#each [...data.sessions]
			.filter((s) => s.images && s.images.length > 0)
			.reverse() as session}
			{#if session.images && session.images.length > 0}
				<section class="not-prose">
					<h2 class="text-2xl font-bold mb-3 mt-16">
						{session.name}
						<span class="text-stone-500 font-normal text-xl"
							>· {new Date(session.date).toLocaleDateString(
								"es-ES",
								{
									year: "numeric",
									month: "long",
									day: "numeric",
								},
							)}</span
						>
					</h2>
					<div class="carousel">
						{#each session.images as image (image)}
							<button
								class="carousel-item"
								onclick={() => openImage(image)}
								type="button"
							>
								<img
									src={image}
									alt="Imagen de {session.name}"
									class="carousel-image"
								/>
							</button>
						{/each}
					</div>
				</section>
			{/if}
		{/each}
	{/if}

	{#if data.poster}
		<section class="not-prose">
			<h2 class="text-2xl font-bold mb-3 mt-16">Póster</h2>
			{#if data.poster.title}
				<p class="text-stone-600 mb-3 italic">{data.poster.title}</p>
			{/if}
			{#if data.poster.pdf}
				<a
					href={data.poster.pdf}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
							clip-rule="evenodd"
						/>
					</svg>
					Descargar póster (PDF)
				</a>
			{/if}
		</section>
	{/if}
</article>

{#if selectedImage}
	<button
		class="lightbox"
		onclick={closeImage}
		type="button"
		aria-label="Cerrar imagen"
	>
		<img src={selectedImage} alt="Imagen ampliada" class="lightbox-image" />
	</button>
{/if}

<style>
	.carousel {
		display: flex;
		gap: 0.75rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: thin;
		scrollbar-color: #a8a29e #e7e5e4;
	}

	.carousel::-webkit-scrollbar {
		height: 8px;
	}

	.carousel::-webkit-scrollbar-track {
		background: #e7e5e4;
		border-radius: 4px;
	}

	.carousel::-webkit-scrollbar-thumb {
		background: #a8a29e;
		border-radius: 4px;
	}

	.carousel::-webkit-scrollbar-thumb:hover {
		background: #78716c;
	}

	.carousel-item {
		flex: 0 0 auto;
		width: 80%;
		max-width: 500px;
		scroll-snap-align: center;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.carousel-item:active {
		transform: scale(0.98);
	}

	.carousel-image {
		width: 100%;
		height: 280px;
		object-fit: cover;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		display: block;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
		cursor: zoom-out;
		padding: 2rem;
		border: none;
	}

	.lightbox-image {
		max-width: 95%;
		max-height: 95%;
		width: auto;
		height: auto;
		border-radius: 0.5rem;
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.3);
	}

	@media (min-width: 768px) {
		.carousel-item {
			width: 60%;
		}
	}

	@media (min-width: 1024px) {
		.carousel-item {
			width: 45%;
		}
	}
</style>
