import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

// Указывает на корневую директору index.html, на div
new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '', // Указывает на <input type="text" class="form-control" id="name" v-model="form.name">
                auditory: '', // Указывает на <input type="text" class="form-control" id="auditory" v-model="form.auditory">
                displina: '', // Указывает на <input type="text" class="form-control" id="displina" v-model="form.displina">
                time: '', // Указывает на <input type="text" class="form-control" id="time" v-model="form.time">
            }
        }
    },
    methods: {
        createContact() {
            console.log(this.form)
        }
    }
})