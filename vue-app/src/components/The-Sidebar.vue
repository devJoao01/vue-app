<template>
    <div @click.stop="drawer = !drawer">
        <v-btn density="comfortable" icon="$vuetify"></v-btn>
    </div>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
            <h2 class="text-center">MANAGER</h2>
            <v-select label="Language" :items="['Inglês']"></v-select>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
        }
    },
}
</script>

<style scoped>
.v-navigation-drawer__scrim {
    height: 100vh;
}

button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (min-width:992px) {
        right: 60px;
    }
}
</style>