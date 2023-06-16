<template>
<section>
    <header><h1>Users</h1></header>
    <new-user @add-user="addUser"></new-user>
    <ul>
        <active-user>
            v-for="user in users"
            :key = "id"
            :id = "user.id"
            :userName: "user.userName"
            :age="user.age"
        </active-user>
    </ul>
</section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
    export default{
  components: { ActiveUser },
        data(){
            return{
                users: [
                    {
                        id: '001',
                        userName: 'jsmith22',
                        age: '25'
                    },
                    {
                        id: '002',
                        userName:'astanwyck',
                        age: '33'
                    }
                ],
            };
        },

        methods: {
            addUser(userName, age){
                const newUser = {
                    id: new Date().toISOString,
                    userName: userName,
                    age: age,
                }
                 this.users.push(newUser)
            }
        }

       

    }

    

</script>