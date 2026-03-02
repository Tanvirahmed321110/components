
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
const { Component, xml } = owl;


export class App extends Component {
    static components = { Header, Footer };
    static template = xml`
    <Header />
        <h1>Hello Owl</h1>

    <Footer />
    `;
}
