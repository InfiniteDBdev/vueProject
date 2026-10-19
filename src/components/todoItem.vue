<!-- lui c'est le 2eme gosse qui va prévenir le parent liste avec son emit  -->

<script setup>
    const props = defineProps({ /* allé 2heure a trouve que le "P" de props était en maj */
        todo : {
            type: Object,
            required: true,
        },
    })

    const emit = defineEmits (['update', 'delete'])
</script>

<template>

    <li>
      <input 
        
        type="checkbox"
        :checked="props.todo.fini"
        @change="emit('update', props.todo.id)"
        
      />

    <span :style="{textDecoration: props.todo.fini ? 'line-through' : 'none' }">
        {{ props.todo.title }}
    </span>

    <button @click="emit('delete', props.todo.id)">Surprimer</button>
    
    </li>


</template>