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
        <br/>
        <hr>
        <br/>

        <h1>Axios test</h1>
        <div class="hello">
            <h1>your IP is {{ ip }}</h1>
            <input type="text" v-model="input.firstname" placeholder="First Name" />
            <input type="text" v-model="input.lastname" placeholder="Last Name" />
            <button v-on:click="sendData()">Send</button>
            <br />
            <br />
            <div>{{ response }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                ip: "",
                input: {
                    firstname: "",
                    lastname: ""
                },
                response: ""
            }
        },
        mounted() {
            this.$http.get("http://192.168.0.157:8080/greeting").then(result => {
                this.ip = result.body.id;
            }, error => {
                console.error(error);
            });
        },
        methods: {
            sendData() {
                this.$http.post("https://httpbin.org/post", this.input, {headers: { "content-type": "application/json" } }).then(result => {
                    this.response = result.data;
                }, error => {
                    console.error(error);
                });
            }
        }
    }
</script>