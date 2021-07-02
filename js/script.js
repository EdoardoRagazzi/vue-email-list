const app = new Vue(
    {
        el: "#app",
        data: {
            number: null,
            array: []
        },
        mounted() {
            for (let i = 0; i < 10; i++)
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail ')
                    .then(result => {
                        this.number = result.data.response;
                        this.array.push(this.number)
                        console.log(this.number)
                    });
        }

    }
);