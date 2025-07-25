<template>
  <div>
    <nav class="navbar bg-body-tertiary">
      <div>
        <router-link to="/" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style="padding: 10px;">Home</router-link>
        <router-link to="/usuarios" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style="padding: 10px;">Usuários</router-link>
        <router-link to="/cadastrar" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style="padding: 10px;">Cadastrar</router-link>
        <router-link to="/login" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style="padding: 10px;">Login</router-link>
      </div>
      <div></div>
      <div>Sair</div>
    </nav>
    <router-view />
  </div>
</template>
