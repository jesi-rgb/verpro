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
		id: "xplies-25-11",
		type: "actividad",
		title: 'Proyecto XPLIES.25.11 "Lo que los verbos pronominales esconden. Aprende a investigar en gramática del español"',
		date: new Date("2025-12-18"),
		location: "Colegio Cristo Rey de Jaén",
		audience: "Alumnado de 1º de Bachillerato",
		description: 'Proyecto de docencia no universitaria y divulgación científica "Diez años de Explora-IES. Curso 2025-2026", desarrollado dentro del Programa Hypatia y del XV Plan de Divulgación Científica y de la Innovación de la Universidad de Jaén (financiado por FECYT, Ministerio de Ciencia e Innovación). Primera sesión: 18 de diciembre de 2025. Segunda sesión: 16 de enero de 2026.',
		images: [
			"/pics/actividades/primera-sesion-todos.jpeg",
			"/pics/actividades/primera-sesion-alumnos.jpg",
			"/pics/actividades/primera-sesion-pizarra.jpg",
		],
	},
];


// Eliminado porque no se desarrolló esta actividad
// {
// 	id: "taller-verbos-pronominales-2025",
// 	type: "actividad",
// 	title: "Lo que los verbos pronominales esconden. Cómo se investiga en gramática del español.",
// 	date: new Date("2025-11-07T09:30:00"),
// 	location: "Aula I-31 del Edificio A4",
// 	audience: "Estudiantes de 3º y 4º de ESO y Bachillerato",
// 	organizer:
// 		"XXV Semana de la Ciencia, organizada por la Unidad de Cultura Científica y de la Innovación (UCC+i) de la Universidad de Jaén",
// 	url: "https://www.ujaen.es/servicios/ucc/eventos/xxv-semana-de-la-ciencia",
// },
