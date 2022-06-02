export default {
    name: "AppleValue",
    data() {
        return {
            dados: {},
        }
    },
    methods: {
        puxaApple() {
            fetch("https://api.origamid.dev/stock/aapl/quote")
            .then(r => r.json())
            .then(r => {
                this.dados = r;
            })
        }
    },
    created() {
        this.puxaApple();
    },
    template: `<p>Apple marketCap: {{dados.marketCap}}</p>`,
}