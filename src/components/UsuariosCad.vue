<template>
    <div class="form-cad">

        <div class="loading" v-if="carregando">Loading&#8230;</div>
        
        <p v-if="mensagem" class="alert alert-info">{{ mensagem }}</p>

        <form @submit.prevent="cadastrarUsuario">
            <div class="row">
                <div class="col">
                    <label for="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" v-model="usuario.nome" class="form-control">
                </div>

                <div class="col">
                    <label for="email">Email: </label>
                    <input type="email" name="email" id="email" v-model="usuario.email" class="form-control">
                </div>

                <div>
                    <label for="senha">Senha: </label>
                    <input type="password" name="senha" id="senha" v-model="usuario.senha" class="form-control">
                </div>
                
            </div>
            <input type="submit" value="Cadastrar" class="btn btn-info" id="button">
        </form>

         <div v-if="mostrarModal" class="modal-overlay">
            <div class="modal-box">
                <p>Usuário cadastrado com sucesso. Deseja cadastrar outro?</p>
                <button class="btn btn-success" @click="cadastrarOutro">Sim</button>
                <button class="btn btn-danger" @click="irParaLista">Não</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const usuario = ref({
    nome: '',
    email:'',
    senha: ''
});


const carregando = ref(false)
const mensagem = ref('')
const mostrarModal = ref(false)

const cadastrarUsuario = async () => {
    carregando.value = true
    try {
        if (usuario.nome == '' || usuario.email == '' || usuario.senha == '') {
            mensagem.value = "Todos os campos são obrigatórios"
        } else {
            const res = await axios.post('http://127.0.0.1:5000/usuarios', usuario.value)
            mensagem.value = 'Cadastrado com sucesso'
            usuario.value = { nome: '', email: '', senha: '' }
            mostrarModal.value = true
        }
    } catch (error) {
        console.error(error)
        mensagem.value = 'Erro ao cadastrar'
    } finally {
        carregando.value = false
    }
}

const cadastrarOutro = () => {
    usuario.value = { nome: '', email: '', senha: '' }
    mostrarModal.value = false
}

const irParaLista = () => {
    window.location.href = '/usuarios' // ajuste o caminho conforme sua rota
}

</script>