import MostraDados from "./MostraDados.js";

export default {
    name: "Campo",
    data() {
        return {
            simbolo: "",
            dados: {},
        }
    },
    template: `
    <div>
        <input type="text" v-model="simbolo"/>
        <button @click="puxaApi">Enviar</button>
        <mostra-dados :info="dados"></mostra-dados>
    </div>
    `,
    methods: {
        puxaApi() {
            fetch(`https://api.origamid.dev/stock/${this.simbolo}/quote`)
            .then(r => r.json())
            .then(r => {
                this.dados = r;
            });
        }
    },
    components: {
        MostraDados,
    }
}