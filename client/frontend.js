import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

// Указывает на корневую директору index.html, на div
new Vue({
    el: '#app', // Указывает на <div class="container pt-3" id="app" v-cloak>
    data() {
        return {
            form: {
                building: '', // Указывает на <input type="text" class="form-control" id="name" v-model="form.name">
                auditory: '', // Указывает на <input type="text" class="form-control" id="auditory" v-model="form.auditory">
                displina: '', // Указывает на <input type="text" class="form-control" id="displina" v-model="form.displina">
                time: '' // Указывает на <input type="text" class="form-control" id="time" v-model="form.time">
            },
            contacts: [
                { id: 0, building: 'Main buildin BMSTU', auditory: '219', displina: 'Math', time: '12:00 - 13:35' }
            ]
        }
    },
    methods: {
        createContact() { // Указывает на <form class="form-inline mb-3" @submit.prevent="createContact">
            // console.log(this.form)
            const {...contact } = this.form;
            console.log(contact);

            this.contacts.push({...contact, id: Date.now() }); // Указывает на <div v-else-if="contacts.length">

            this.form.building = this.form.auditory && this.form.displina && this.form.time && '';
        },
        markContact(id) {
            console.log(id);
        },
        removeContact(id) {

        }
    }
})