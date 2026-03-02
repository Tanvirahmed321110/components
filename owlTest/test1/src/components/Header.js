const { Component, xml } = owl;
export class Header extends Component {


    static template = xml`
        <header style="background:#222;color:white;padding:15px;">
            <h2 style="display:inline-block;">🎓 Simple Portal</h2>
        </header>
    `;
}