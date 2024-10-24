<script lang="ts">
    import type { ProjectMember } from "$lib/types";

    interface Props {
        data: ProjectMember;
    }

    let { data }: Props = $props();
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
            class="not-prose rounded-xl w-1/3 border shadow-md float-right ml-1 mb-1 md:ml-5 md:mb-5"
            style="view-transition-name: {data.id};"
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

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
</style>
