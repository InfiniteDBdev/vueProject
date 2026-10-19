import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const dejaCharge = ref(false)

  /* pour savoir le nb de tâches restantes */
  const tacheRestante = computed(
    () => todos.value.filter((todo) => !todo.fini).length
  )

  /* charger les tâches de départ (une seule fois) */
  function chargerTaches(liste) {
    if (dejaCharge.value) return
    todos.value = liste.map((item) => ({
      id: item.id,
      title: item.title,
      fini: item.completed,
    }))
    dejaCharge.value = true
  }

  /* pour ajouter une tâche */
  function ajouteTache(title) {
    todos.value.push({
      id: Date.now(),
      title,
      fini: false,
    })
  }

  /* pour delet une tâche */
  function deleteTache(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  /* pour swap 'fait'  | 'pas fait' */
  function updateTache(id) {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.fini = !todo.fini
    }
  }
/* pour retourné le resulta sinn sa retourn rien  */
  return {
    todos,
    tacheRestante,
    chargerTaches,
    ajouteTache,
    deleteTache,
    updateTache,
  }
})