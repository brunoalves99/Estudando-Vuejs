export default {
    name: "GoogleValue",
    data() {
        return {
            dados: {},
        }
    },
    methods: {
        puxaGoogle() {
            fetch("https://api.origamid.dev/stock/googl/quote")
            .then(r => r.json())
            .then(r => {
                this.dados = r;
            });
        }
    },
    created() {
        this.puxaGoogle();
    },
    template: `<p>Google marketCap: {{dados.marketCap}}</p>`
}