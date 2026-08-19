import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft projects based on the environment, sorted by `order` ascending */
export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
	const projects = await getCollection("project", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
	return projects.sort((a, b) => a.data.order - b.data.order);
}
