<!-- le premier gosse qui emit sur la liste le prop descent l'emit remonte  -->

<script setup>
const title = defineModel ({type: String, default: ''})

const emit = defineEmits (['submit'])

function envoyer () {
    if (title.value.trim() === '' ) return /* et 2 heure de plus pour "title" et "Titre" qui retourne un undifined */
    emit('submit')
}
</script>

<template>
  <div>
    <input
      v-model="title"
      type="text"
      placeholder="écrit ici ta new Tache"
      @keyup.enter="envoyer"
    />
    <button @click="envoyer">Ajouter</button>
  </div>
</template>