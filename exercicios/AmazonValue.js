import AppleValue from "./AppleValue.js";


export default {
    name: "AmazonValue",
    data() {
        return {
            dados: {},
        }
    },
    components: {
        AppleValue,
    },
    methods: {
        puxaAmazon() {
            fetch("https://api.origamid.dev/stock/amzn/quote")
            .then(r => r.json())
            .then(r => {
                this.dados = r;
            });
        }
    },
    created() {
        this.puxaAmazon();
    },
    template: `
    <div>
        <p>Amazon marketCap: {{dados.marketCap}}</p>
        <apple-value></apple-value>
    </div>
    `
}