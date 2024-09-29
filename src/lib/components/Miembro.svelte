<script>
    export let imgUrl
</script>

<div class="relative">
    <img
        src={imgUrl}
        width="150"
        alt="miembro de verpro"
        class="absolute left-[-180px] top-0 rounded-xl shadow-md shadow-stone-400"
    />
    <div class="flex flex-col gap-1">
        <slot name="name"></slot>
        <slot name="orcid"></slot>

        <slot name="details"></slot>
    </div>
</div>
