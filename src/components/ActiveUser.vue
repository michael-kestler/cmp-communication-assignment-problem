<template>
<section>
    <h2>UserName: {{userName}}</h2>
    <h3>Age: {{age}}</h3>
</section>
</template>

<script>
export default{
    props: {
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
                        userName: 'jsmith22',
                        age: '25'
                    },
                    {
                        userName:'astanwyck',
                        age: '33'
                    }
                ],
            };
    }

}

</script>

