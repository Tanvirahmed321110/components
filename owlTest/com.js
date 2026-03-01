const { Component, mount, useState, xml } = owl;

// ১. Header Component
class Header extends Component {
    setup() {
        this.state = useState({
            items: ['home', 'about', 'services', 'contact']
        });
    }

    static template = xml`
        <header class="bg-gray-800 text-white p-4">
            <div class="container mx-auto">
                <div style="display:flex; justify-content: space-between; align-items: center; gap:12px;">
                    <h2 class="text-xl font-bold text-white">Logo</h2>
                    <ul style="display:flex; gap:12px; list-style:none;">
                        <t t-foreach="state.items" t-as="item" t-key="item">
                            <li>
                                <a href="#" class="capitalize" style="color:white; text-decoration:none;">
                                    <t t-esc="item"/>
                                </a>
                            </li>
                        </t>
                    </ul>
                </div>
            </div>
        </header>
    `;
}

// ২. Footer Component
class Footer extends Component {
    // এখানে আপনার static = template ছিল, সেটা ঠিক করে দেওয়া হয়েছে
    static template = xml`
    <footer class="bg-gray-100 p-6 mt-10 border-t">
        <div class="container mx-auto text-center">
            <p class="text-gray-600">© 2026 - @copyright My Owl App</p>
        </div>
    </footer>
    `;
}


class Sidebar extends Component {
    static template = xml`
        <div class="sidebar">
            <ul>
                <li><a href="">Visit our Leadership</a></li>
                <li><a href="">Visit our website</a></li>
                <li><a href="">Visit our website</a></li>
            </ul>
        </div>
    `;
}



// ৩. Main App Component (Parent)
class MainApp extends Component {
    static template = xml`

            <Header/>
            <main class="main">
            <div class='container' style="flex:1;display:flex;">
                <div style="display:flex;flex:1;justify-content: space-between;gap:32px;margin:32px 0;">
                    <div class="cr" style="text-align:left;background:orange;flex:1;border-radius:16px;padding:24px">
                        <h1 class="text-3xl font-bold">Welcome to Owl.js</h1>
                        <p class="mt-4 text-gray-700">এটি আমাদের মেইন কন্টেন্ট এরিয়া। এখন আপনার হেডার এবং ফুটার দুটোই
                            কাজ করবে!</p>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </main>
            <Footer/>

    `;
    static components = { Header, Footer, Sidebar };
}

// ৪. মাউন্ট করার সঠিক লাইন
mount(MainApp, document.getElementById('app'));