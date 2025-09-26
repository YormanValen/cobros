<script setup lang="ts">
import type { CobroType } from '@/types/cobroType';

const props = defineProps({
    nombre: {
        type: String,
        required: true
    }
});

const cobros: CobroType[] = [
    {
        id: 1,
        nombre: 'Cobro 1',
        descripcion: 'Cobro 1',
    }
];

const emit = defineEmits(['changeName']);

function changeName() {
    emit('changeName');
}
</script>

<template>
    <v-card class="pa-4">
        <h1>{{ props.nombre }}</h1>
        <v-btn variant="flat" color="primary" @click="changeName()">Cambiar nombre</v-btn>
    </v-card>
</template>
<style scoped lang="scss"></style>
