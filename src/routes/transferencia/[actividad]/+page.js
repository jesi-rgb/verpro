import { transferenciaItems } from "$lib/transferencia";

/** @param {{ params: { actividad: string } }} props */
export function load({ params }) {
	return transferenciaItems.find((item) => item.id === params.actividad);
}
