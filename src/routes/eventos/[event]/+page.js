import { error } from "@sveltejs/kit";
import { events } from "$lib/events";

export function load({ params }) {
	const event = events.find((e) => e.id === params.event);
	if (!event) throw error(404, "Evento no encontrado");
	return event;
}
