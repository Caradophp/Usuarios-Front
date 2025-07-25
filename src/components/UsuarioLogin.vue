<template>
    <div>

        <div class="loading" v-if="carregando">Loading&#8230;</div>
        
        <p v-if="mensagem" class="alert alert-info">{{ mensagem }}</p>

        <form @submit.prevent="logarUsuario">
            <div class="container-fluid">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" class="form-control" v-model="usuario.email">
                <label for="senha">Senha: </label>
                <input type="password" name="senh" id="senha" class="form-control" v-model="usuario.senha">
                <input type="submit" value="Entrar" class="btn btn-info" style="margin-top: 15px;
                text-align: center;">
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const usuario = ref({
    email: '',
    senha: ''
});

const carregando = ref(false)
const mensagem = ref('')

const logarUsuario = async () => {
    carregando.value = true
    mensagem.value = ''

    if (usuario.value.email == '' || usuario.value.senha == '') {
        mensagem.value = 'Todos os campos devem ser preenchidos'
        carregando.value = false
        return
    }

    try {
        const res = await axios.post('http://127.0.0.1:5000/login', usuario.value)

        if (res.data.usuario) {
            mensagem.value = res.data.mensagem
            usuario.value = { email: '', senha: '' }
            window.location.href = '/usuarios'
        } else if (res.data.erro) {
            mensagem.value = res.data.erro
        } else {
            mensagem.value = 'Resposta inesperada do servidor'
        }
    } catch (error) {
        console.error(error)
    } finally {
        carregando.value = false
    }
}

</script>