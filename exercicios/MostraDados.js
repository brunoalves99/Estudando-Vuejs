export default {
    name: "MostraDados",
    props: ["info"],
    template: `
    <ul>
        <li v-for="(inf, value, index) in info" :key="value + index">{{value}}: {{inf}}</li>
    </ul>
    `,
}