<script lang="ts">
	import type { TransferenciaItem } from "$lib/types";

	/**
	 * @type {{ activity: TransferenciaItem }}
	 */
	let { activity } = $props();

	// Link to external URL if it exists, otherwise link to detail page
	const isExternalLink = !!activity.url;
	const isInternalLink = activity.type === "actividad" && !activity.url;
	const Tag = isExternalLink ? "a" : isInternalLink ? "a" : "article";
	const href = isExternalLink
		? activity.url
		: isInternalLink
			? `/transferencia/${activity.id}`
			: undefined;
</script>

<svelte:element
	this={Tag}
	{href}
	target={isExternalLink ? "_blank" : undefined}
	rel={isExternalLink ? "noopener noreferrer" : undefined}
	class="block mb-8 px-6 py-4 backdrop-blur-md border border-gray-200 rounded-lg {isExternalLink ||
	isInternalLink
		? 'no-underline hover:border-gray-300 hover:shadow-md cursor-pointer'
		: ''} transition-all"
>
	<h3 class="text-xl font-semibold mb-3" style="margin-top: 0;">
		{activity.title}
	</h3>

	{#if activity.organizer}
		<p class="text-stone-500 mb-2">{activity.organizer}</p>
	{/if}

	{#if activity.description}
		<p class="text-sm text-stone-600 mb-3 leading-relaxed">
			{activity.description}
		</p>
	{/if}

	<div class="font-normal space-y-1 text-sm">
		<p>
			<strong>Fecha y hora:</strong>
			{activity.date.toLocaleDateString("es-ES", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit",
			})} h
		</p>
		{#if activity.location}
			<p><strong>Lugar:</strong> {activity.location}</p>
		{/if}
		{#if activity.audience}
			<p>
				<strong>Dirigido a:</strong>
				{activity.audience}
			</p>
		{/if}
	</div>
</svelte:element>
