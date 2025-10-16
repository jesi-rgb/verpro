export type ProjectMember = {
	id: string;
	name: string;
	imageUrl: string;
	orcidUrl: string;
	description: string[];
	team: "research" | "work";
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
};
