<template>
<section>
    <!-- <header><h1>Users</h1></header> -->
    <!-- <new-user @add-user="addUser"></new-user> -->
    <!-- <h2>UserName: {{userName}}</h2>
    <h3>Age: {{age}}</h3> -->
     <!-- <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Age"/>  -->
    <ul>
        <active-user>
            v-for="user in users"
            :key = "user.id"
            :id = "user.id"
            :userName: "user.userName"
            :age="user.age"
        </active-user>

        <user-data>
           
        </user-data>
    </ul>
</section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
    export default{
  components: { ActiveUser },
        data() {
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
            }
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


<style>
    html{
        font-family: sans-serif;
    }

    section{
        margin: 2rem auto;
        max-width: 40rem;
        border-radius: 12px;
        border: 1px solid #ccc;
        padding: 1rem
    }



</style>