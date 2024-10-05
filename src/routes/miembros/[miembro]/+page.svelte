<script lang="ts">
    import type { ProjectMember } from "$lib/types";

    export let data: ProjectMember;
</script>

<h1 class="">
    {data.name}
</h1>

<a class="not-prose text-xl" target="_blank" href={data.orcidUrl}
    ><span class="no-underline">Orcid: </span><span class="underline"
        >{data.orcidUrl.split("/").slice(-1)}</span
    ></a
>

<article>
    <aside>
        <img
            src={data.imageUrl}
            alt={data.id}
            class="not-prose rounded-xl border"
            style="view-transition-name: {data.id};"
            width="250"
        />
    </aside>
    {#each data.description as p}
        {@html p}
    {/each}
</article>

<style>
    article {
        position: relative;
    }

    aside {
        float: right;
        margin-left: 30px;
        margin-bottom: 10px;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
</style>
