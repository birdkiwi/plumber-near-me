<template>
    <div class="map-info-area" :class="'map-info-area-' + type">
        <slot></slot>
    </div>
</template>

<script>
    import '../assets/css/components/map-info-area.css';

    export default {
        props: ['type']
    }
</script>