<template>
    <header>
        <v-container>
            <div class="content">
                <div class="logo">
                    <v-img src="@/assets/logo.png" alt="Descrição da imagem" width="60" height="60" />
                </div>
                <nav>
                    <RouterLink to="/">Example</RouterLink>
                    <RouterLink to="/">Example</RouterLink>
                    <RouterLink to="/">Example Large</RouterLink>
                </nav>
            </div>
        </v-container>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../sass/header.scss";
</style>
