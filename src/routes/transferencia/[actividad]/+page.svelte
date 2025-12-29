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
		<div class="prose prose-stone max-w-none">
			<p>{data.description}</p>
		</div>
	{/if}

	{#if data.images && data.images.length > 0}
		<section class="mt-8">
			<h2 class="text-2xl font-bold mb-4">Galería</h2>
			<div class="carousel">
				{#each data.images as image (image)}
					<button
						class="carousel-item"
						onclick={() => openImage(image)}
						type="button"
					>
						<img
							src={image}
							alt="Imagen de la actividad"
							class="carousel-image"
						/>
					</button>
				{/each}
			</div>
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
		padding-bottom: 1rem;
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
		height: auto;
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
