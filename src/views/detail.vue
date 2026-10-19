<script setup>

/* import { useRoute } from 'vue-router';
const route = useRoute(); Variantee pour utilisé UseRoute et pas Props
dans le TP on doit utilisé Props*/ 

defineProps({
    id: String,
})

</script>

<template>
    <main>
        <h1>Détail de la Tache</h1>
        <p>ID: {{ id }}</p> <!-- en utilisant Props -->
        <!-- <p>avec le ID : {{ route.params.id }}</p> utilisant userRoute -->
    </main>

</template>