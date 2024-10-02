<script>
    export let imgUrl;
</script>

<div class="relative my-10 h-fit">
    <img
        src={imgUrl}
        width="150"
        alt="miembro de verpro"
        class="absolute left-[-180px] top-0 rounded-xl shadow-md shadow-stone-400"
    />
    <div class="flex flex-col">
        <slot name="name"></slot>
        <slot name="orcid"></slot>

        <slot name="details"></slot>
    </div>
</div>
