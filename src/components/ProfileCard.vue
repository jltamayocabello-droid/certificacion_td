<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();
const handleUpdate = () => {
    const newName = prompt("Nuevo nombre:")
    userStore.updateName(newName)
}

const name = ref('Armando Camus');
const role = ref('Senior Web Developer');
const bio = ref('Apasionado por el desarrollo Front-End y la arquitectura de componentes escalables.');

const updateName = () => {
    const newName = prompt("Nuevo nombre:")
    if (newName?.trim()) {
        name.value = newName // Actualizamos el nombre
    }
}
</script>

<template>
    <article class="profile-card">
        <header class="profile-card__header">
            <img src="https://picsum.photos/150" alt="Foto de perfil" class="profile-card__avatar">
            <h2 class="profile-card__name">{{ name }}</h2>
            <p class="profile-card__role">{{ role }}</p>
        </header>
        <section class="profile-card__body">
            <p class="profile-card__bio">{{ bio }}</p>
        </section>
        <footer class="profile-card__footer">
            <button class="profile-card__button profile-card__button--primary" @click="updateName">Actualizar Nombre</button>
        </footer>
    </article>
</template>

<style scoped lang="scss">
</style>