import { Component, xml } from "@odoo/owl";

export class Header extends Component {
    static template = xml`
        <header style="background:#1e293b;color:white;padding:15px;">
            <h2>🎓 Student Portal</h2>
        </header>
    `;
}