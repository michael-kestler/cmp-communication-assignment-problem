<template>
<section>
    <h2>UserName: {{username}}</h2>
    <h3>Age: {{age}}</h3>
</section>
</template>

<script>
export default{
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        }
    },

}

</script>

