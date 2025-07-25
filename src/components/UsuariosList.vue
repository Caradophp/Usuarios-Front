<template>
    <v-container>
      <h1>Lista de Usuários</h1>
  
      <div class="loading" v-if="carregando">Loading&#8230;</div>
      <v-alert v-else-if="usuarios.length === 0" type="warning" dense text>Nenhum usuário encontrado.</v-alert>
  
      <v-data-table
        v-else
        :headers="headers"
        :items="usuarios"
        :loading="carregando"
        class="elevation-1"
        item-value="id"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn icon @click="editarUsuario(item.id)">
            <v-icon color="primary">mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deletarUsuario(item.id)">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        usuarios: [],
        carregando: true,
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Nome', value: 'nome' },
          { text: 'Email', value: 'email' },
          { text: 'Ações', value: 'actions', sortable: false },
        ],
      }
    },
    methods: {
      async carregarUsuarios() {
        this.carregando = true
        try {
          const res = await axios.get("http://127.0.0.1:5000/usuarios")
          this.usuarios = res.data
        } catch (error) {
          console.error(error)
        } finally {
          this.carregando = false
        }
      },
      async deletarUsuario(id) {
        this.carregando = true
        try {
          await axios.delete(`http://127.0.0.1:5000/usuarios/${id}`)
          this.usuarios = this.usuarios.filter(u => u.id !== id)
        } catch (error) {
          console.error(error)
        } finally {
          this.carregando = false
        }
      },
      editarUsuario(id) {
        // Substitua isso pela lógica real
        alert(`Editar usuário com ID ${id}`)
      }
    },
    mounted() {
      this.carregarUsuarios()
    }
  }
  </script>
  