<template>
<section>
    <h2>UserName: {{userName}}</h2>
    <h3>Age: {{age}}</h3>
</section>
</template>

<script>
export default{
    props: {
        id:{
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        }
    },

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
    }

}

</script>

<style>
    section{
        margin: 2rem auto;
        max-width: 40rem;
        border-radius: 12px;
        border: 1px solid #ccc;
    }


</style>