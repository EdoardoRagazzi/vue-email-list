const app = new Vue(
    {
        el: "#app",
        data: {
            number: null,
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result => {
                    this.number = result.data.response;
                    console.log(this.number)
                });
        }

    }
);