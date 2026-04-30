import type { Event } from "./types";

// Auto-discover every image under static/pics/eventos/<event-id>/.
// Files are served at /pics/eventos/<event-id>/<file>.
const eventImageModules = import.meta.glob(
	"/static/pics/eventos/*/*.{webp,jpg,jpeg,png,avif}",
);

const imagesByEvent: Record<string, string[]> = {};
for (const path of Object.keys(eventImageModules)) {
	const match = path.match(/\/static(\/pics\/eventos\/([^/]+)\/[^/]+)$/);
	if (!match) continue;
	const publicUrl = match[1]
		.split("/")
		.map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
		.join("/");
	(imagesByEvent[match[2]] ||= []).push(publicUrl);
}
for (const id of Object.keys(imagesByEvent)) {
	imagesByEvent[id].sort();
}

const rawEvents: Event[] = [
	{
		id: "primer-seminario",
		name: "Primer seminario de trabajo",
		date: "2024/11/4",
		modality: "Modalidad virtual",
	},
	{
		id: "segundo-seminario",
		name: "Segundo seminario de trabajo",
		date: "2025/6/2",
		modality: "Modalidad virtual",
	},
	{
		id: "tercer-seminario",
		name: "Tercer seminario de trabajo",
		date: "2025/12/4",
		modality: "Modalidad virtual",
	},
	{
		id: "cuarto-seminario",
		name: "Cuarto seminario de trabajo",
		date: "2026/4/22",
		modality: "Modalidad híbrida (presencial y virtual)",
		description:
			'Sesión monográfica del proyecto de I+D+i “Verbos pronominales del español: clasificación y alternancias (VERPRO)”, celebrada en el marco de las V Jornadas Doctorales ALTYA.',
		interventions: [
			{
				speakers: "Sergio Ibáñez",
				affiliation: "IIFL, UNAM",
				title: "Alternancias pronominales con verbos de desplazamiento y localización",
			},
			{
				speakers: "Lilián Guerrero",
				affiliation: "IIFL, UNAM",
				title: "Estructura argumental de verbos de percepción en corpus",
			},
			{
				speakers: "Rolf Kailuweit y Dominique Steffien",
				affiliation: "U. Düsseldorf",
				title: "Alternancias constitucionales de los verbos de sensación",
			},
			{
				speakers: "Enrique Pato (U. Montreal) y Elena Felíu (U. Jaén)",
				title: "Los verbos de posesión: marcación pronominal y alternancias",
			},
		],
	},
];

export const events: Event[] = rawEvents.map((event) => {
	const images = imagesByEvent[event.id];
	return images && images.length ? { ...event, images } : event;
});

export function hasDetails(event: Event): boolean {
	return Boolean(
		event.description ||
			(event.interventions && event.interventions.length) ||
			(event.images && event.images.length),
	);
}
