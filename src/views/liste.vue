<script setup>
import { useTodoStore } from '../stores/todo';
import { ref, watch } from 'vue';
import todoItem from '@/components/todoItem.vue';
import todoFormulaire from '@/components/todoFormulaire.vue';
import { useFetch } from '@/composable/useFetch';




const store = useTodoStore();
const newTask = ref('');

const {data, loading, error} = useFetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
)
watch(data, (liste) => {
    if (liste) store.chargerTaches(liste)

})

function ajouter() {
    store.ajouteTache(newTask.value.trim())
    newTask.value =''

}
</script>

<template>
  <main>
     <h1>Liste des tâches</h1>
    <p>Restantes : {{ store.tacheRestante }}</p>

    <p v-if="loading">Chargement...</p>
    <p v-if="error">Erreur : {{ error }}</p>

    <todoFormulaire v-model="newTask" @submit="ajouter" />

    <ul>
      <todoItem
        v-for="todo in store.todos"
        :key="todo.id"
        :todo="todo"
        @update="store.updateTache"
        @delete="store.deleteTache"
      />
    </ul>
  </main>
</template>