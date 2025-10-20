<template>
    <section class="card">
        <div class="card-header">
            <h3>Usuarios desde MockAPI</h3>
        </div>

        <div class="card-body">
            <button class="btn btn-primary my-3" @click="obtener">Obtener Usuarios</button>

            <div v-if="usuarios.length">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(usuario, index) in usuarios" :key="index">
                                <td>{{ usuario.id }}</td>
                                <td>{{ usuario.nombre }}</td>
                                <td>{{ usuario.apellido }}</td>
                                <td>{{ usuario.telefono }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h4 v-else class="alert alert-danger">No se encontraron usuarios</h4>
        </div>
    </section>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Http',

    mounted() {
        this.obtener()
    },

    data() {
        return {
            usuarios: []
        }
    },
    methods: {
        async obtener() {
            try {
       //endpoint fede
                const response = await axios.get('https://68f58e186b852b1d6f145bd0.mockapi.io/usuarios/usuarios')
                this.usuarios = response.data
            } catch (error) {
                console.error('Error al obtener usuarios:', error)
                this.usuarios = []
            }
        }
    },
    computed: {

    }
}
</script>


<style scoped>
.card-header {
    background-color: seagreen;
    color: white;
}

.table th {
    text-transform: uppercase;
    font-size: 20px;
}
</style>