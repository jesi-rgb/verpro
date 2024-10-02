import { projectMembers } from "$lib/members";

export function load({ params }) {
  return projectMembers.find((m) => m.id === params.miembro);
}
