// owl লাইব্রেরি থেকে প্রয়োজনীয় জিনিস নেওয়া (যদি প্রয়োজন হয়)
const { Component, xml } = owl;

// এখানে 'export' কিউওয়ার্ডটি অবশ্যই থাকতে হবে
export class Footer extends Component {
    static template = xml`
        <footer>
            <div class="container">
                <p>@copy right 2026</p>
            </div>
        </footer>
    `;
}