<script>
    import Miembro from "$lib/components/Miembro.svelte";

    import { projectMembers } from "$lib/members";

    const researchMembers = projectMembers.filter((m) => m.team == "research");
    const workMembers = projectMembers.filter((m) => m.team == "work");
</script>

<h1>Miembros</h1>

<div class="flex flex-col space-y-10">
    <div>
        <h2 class="border-b border-stone-500">
            Miembros del equipo de investigación
        </h2>

        <div class="grid grid-cols-3 gap-10">
            {#each researchMembers as { id, name, imageUrl }}
                <Miembro {id} {name} {imageUrl} />
            {/each}
        </div>
    </div>

    <div>
        <h2 class="mt-[600px] border-b border-stone-500">
            Miembros del equipo de trabajo
        </h2>

        <div class="grid grid-cols-3 gap-10">
            {#each workMembers as { id, name, imageUrl }}
                <Miembro {id} {name} {imageUrl} />
            {/each}
        </div>
    </div>
</div>
