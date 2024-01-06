<template>
    <header>
        <v-container>
            <div class="content">
                <div class="logo">
                    <v-img src="@/assets/logo.png" alt="Descrição da imagem" width="60" height="60" />
                </div>
                <nav>
                    <RouterLink to="/" :class="{ 'active': isActive('/') }">Example</RouterLink>
                </nav>
            </div>
        </v-container>
    </header>
</template>

<script>
export default {
    methods: {
        isActive(route) {
            return this.$route.path === route
        }
    }
};
</script>

<style scoped>
@import "../sass/header.scss";
</style>
