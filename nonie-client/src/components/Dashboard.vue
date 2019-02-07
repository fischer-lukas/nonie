<template>
    <div class="container">
        <h1>Nonie Client - Prototype</h1>
        <table class="table">
            <tbody>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Count</th>
            </tr>
            <template v-for="artefact in artefacts">
                <tr v-bind:key="artefact.id">
                    <td>{{ artefact.id }}</td>
                    <td>{{ artefact.name }}</td>
                    <td>{{ artefact.size }}</td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                artefacts: {}
            }
        },
        async created () {
            const response = await axios.get('http://localhost:8000/dashboard')
            this.artefacts = response.data
        }
    }
</script>