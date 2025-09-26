<script setup lang="ts">
import { ref } from 'vue';
import PruebaComponente from '@/components/prueba/PruebaComponente.vue';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const page = ref({ title: 'Lo kaskaksaksk' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Sample Page',
        disabled: true,
        href: '#'
    }
]);

function changeName() {
    console.log('llamado desde el compoente hijo');
}
</script>

<template>
    <BaseBreadcrumb :title="page.title" icon="mdi-home" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" md="12">
            <PruebaComponente nombre="Soy el hijo" @changeName="changeName" />
        </v-col>
    </v-row>
</template>
