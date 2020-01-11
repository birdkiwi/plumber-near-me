<template>
    <div class="main-offcanvas" :class="active ? 'main-offcanvas-active' : ''">
        <slot></slot>
    </div>
</template>

<script>
    import '../assets/css/layout/offcanvas.css';

    export default {
        props: ['active']
    }
</script>