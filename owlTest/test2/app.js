const { Component, mount, useState, xml } = owl;

// --- ১. সাব-কম্পোনেন্ট: Card (একক কার্ড ডিজাইন) ---
class CardItem extends Component {

    static template = xml`
        <div class="card p-4 border rounded shadow-sm bg-white hover:shadow-md transition">
            <div class="name font-bold text-lg text-indigo-700"><t t-esc="props.card.name"/></div>
            <div class="desc text-sm text-gray-600 my-2"><t t-esc="props.card.description"/></div>
            <div class="point font-mono text-indigo-500 font-bold">Point: <t t-esc="props.card.point"/></div>
        </div>
    `;
}


// --- ২. হেডার কম্পোনেন্ট ---
class Header extends Component {
    setup() {
        this.state = useState({
            headerItems: ['Home', 'About', 'Contact', 'Information']
        })
    }

    static template = xml`
        <header>
            <div class="container">
                <div style="display: flex;align-items: center;justify-content: space-between;">
                    <h2>Logo.</h2>
                    <ul style="display: flex;gap: 24px;">
                        <t t-foreach="state.headerItems" t-key="item" t-as="item">
                            <li><a href="#" t-esc="item">Home</a></li>
                        </t>
                    </ul>
                </div>
            </div>
        </header>
    `;
}


// --- ৩. ফুটার কম্পোনেন্ট ---
class Footer extends Component {
    static template = xml`
        <footer>
            <div class="container">
                <div style="display: flex;justify-content: space-between;">
                    <p>@copy right</p>
                    <p>Footer Description Here.</p>
                </div>
            </div>
        </footer>

    `;
}

// --- Sidebar ---
class Sidebar extends Component {
    setup() {
        this.state = useState({
            sidePoints: ["Point one", "Point two", "Point three"]
        })
    }

    static template = xml`
        <!-- right sidebar -->
        <aside class="right-sidebar">
            <h3>Right Sidebar</h3>
            <h4 style="margin-top: 24px;"> All Points</h4>
            <ul style="margin-top: 8px;display: flex;flex-direction: column;gap: 4px;">
               <t t-foreach="state.sidePoints" t-as="item" t-key="item">
                    <li t-esc="item">Point one</li>
               </t>
            </ul>
        </aside>
    `;
}





class MainApp extends Component {
    static components = { Header, Footer, Sidebar, CardItem }

    setup() {
        this.state = useState({
            cards: [
                { id: 1, name: "Card One", description: "Lorem ipsum dolor sit amet.", point: 120 },
                { id: 2, name: "Card Two", description: "Sequi voluptatem eos?", point: 150 },
                { id: 3, name: "Card Three", description: "Dolorem sequi voluptatem.", point: 90 },
                { id: 4, name: "Card Three", description: "Dolorem sequi voluptatem.", point: 90 },
                { id: 5, name: "Card Three", description: "Dolorem sequi voluptatem.", point: 90 },
                { id: 6, name: "Card Three", description: "Dolorem sequi voluptatem.", point: 90 }
            ]
        })
    }


    static template = xml`

            <Header />

            <main class="flex-1">
                <section class="main-wrap flex-1">
                    <div class="container flex-1">
                        <div class="main-area flex-1">
                            <div class="main-content flex-1">
                                <h2>Main Conent Here</h2>
                                <div class="cards">
                                    <t t-foreach="state.cards" t-as="item" t-key="item.id">
                                        <CardItem card="item"/>
                                    </t>
                                    </div>
                            </div>


                            <!-- right sidebar call -->
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </main>


            <Footer />

    `
}

mount(MainApp, document.getElementById('app'));