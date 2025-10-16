import type { TransferenciaItem } from "./types";

export const transferenciaItems: TransferenciaItem[] = [
	{
		id: "podcast-1-intro",
		type: "podcast",
		title: "Podcast 1: Introducción",
		date: new Date("2024-01-01"),
		audioSrc: "/audio/podcast-1-intro.opus",
	},
	{
		id: "taller-verbos-pronominales-2025",
		type: "actividad",
		title: "Lo que los verbos pronominales esconden. Cómo se investiga en gramática del español.",
		date: new Date("2025-11-07T09:30:00"),
		location: "Aula I-31 del Edificio A4",
		audience: "Estudiantes de 3º y 4º de ESO y Bachillerato",
		organizer:
			"XXV Semana de la Ciencia, organizada por la Unidad de Cultura Científica y de la Innovación (UCC+i) de la Universidad de Jaén",
	},
];
