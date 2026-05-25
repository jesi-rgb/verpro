export type ProjectMember = {
	id: string;
	name: string;
	imageUrl: string;
	orcidUrl: string;
	description: string[];
	team: "research" | "work";
};

export type Intervention = {
	speakers: string;
	affiliation?: string;
	title: string;
};

export type Event = {
	id: string;
	name: string;
	date: string;
	modality: string;
	description?: string;
	interventions?: Intervention[];
	images?: string[];
};

export type TransferenciaItem = {
	id: string;
	type: "podcast" | "actividad";
	title: string;
	date: Date;
	location?: string;
	audience?: string;
	description?: string;
	audioSrc?: string;
	organizer?: string;
	url?: string;
	images?: string[];
	sessions?: { name: string; date: Date; images?: string[] }[];
	poster?: { image?: string; pdf?: string; title?: string };
};
