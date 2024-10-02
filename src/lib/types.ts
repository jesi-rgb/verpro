export type ProjectMember = {
	id: string;
	name: string;
	imageUrl: string;
	orcidUrl: string;
	description: string[];
	team: "research" | "work";
};
