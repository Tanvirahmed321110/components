import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

const { Component, xml } = owl;

export class About extends Component {
    static components = { Header, Footer };

    static template = xml`
        <div>
            <Header/>
            <div style="padding:20px;">
                <h3>About Page</h3>
                <p>This is a simple portal using Owl JS and ES Modules.</p>
            </div>
            <Footer/>
        </div>
    `;
}