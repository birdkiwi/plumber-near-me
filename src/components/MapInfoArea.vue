<template>
    <div class="map-info-area" :class="'map-info-area-' + type">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['type']
    }
</script>