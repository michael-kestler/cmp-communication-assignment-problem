<template>
<section>
    <!-- <header><h1>Users</h1></header> -->
    <!-- <new-user @add-user="addUser"></new-user> -->
    <!-- <h2>UserName: {{userName}}</h2>
    <h3>Age: {{age}}</h3> -->
     <!-- <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Age"/>  -->
    <ul>
        <active-user :username="users.name" :age="users.age">
         
        </active-user>

        <user-data @set-data="setUserData">
           
        </user-data>
    </ul>
</section>
</template>

<script>
    export default{
        data() {
            return{
                users: {
                    name: 'Michael Kestler',
                    age: '39'
                }
            }
        },


        methods: {
            setUserData(name, age){
                this.users = {
                    name: name,
                    age: age
                }
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