//Model
const searchList = [];
const suggestedWords = [];
let currentSearchTerm = '';

//View
updateView();

function updateView() {
    document.write(/*html*/ `
        <div class="head">
            <ul class="left">
                <li><a href="https://www.google.com/intl/en/about/">About</a></li>
                <li><a href="https://store.google.com">Store</a></li>
            </ul>
            <ul class="right">
                <li><a href="https://mail.google.com">Gmail</a></li>
                <li><a href="https://images.google.com">Images</a></li>
                <li><a href="https://www.google.com/intl/en/options/"><img src="https://www.shareicon.net/download/2015/09/12/99848_apps.ico" id="apps"></a></li>
                <li><a href="https://accounts.google.com/ServiceLogin?hl=en-gb" class="btn" id="btn-blue">Sign in</a></li>
            </ul>
        </div>	
        <main>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" id="logo" />

            <form>
                <div class="searchbar">
                    <input type="text" name="search" id="search" onchange="currentSearchTerm = this.value" value="${currentSearchTerm}">
                </div>
                    <img id="voice" src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" />

                <div class="buttons">
                    <button type="submit" class="btn" value="search">Google Search</button>
                    <button type="submit" class="btn" value="lucky">I'm Feeling Lucky</button>
                </div>
            </form>
        </main>
        <footer>
            <ul class="left">
                <li><a href="https://ads.google.com">Advertising</a></li>
                <li><a href="https://www.google.com/services/">Business</a></li>
            </ul>
            <ul class="right">
                <li><a href="https://policies.google.com/privacy">Privacy</a></li>
                <li><a href="https://policies.google.com/terms">Terms</a></li>
                <li><a href="https://www.google.com/preferences">Settings</a></li>
            </ul>
        </footer>
    `);
}

//create an x that appears at the end of the bar that you can click on to delete search text, appears only when there is text

function createUlList(position) {

}

function createListElement(innerObj, linkRef) {

}

function createForm() {

}

function createButton() {

}

//Controller
//Create eventlistener for enter for search also
function search() {

}

function wordSuggestions() {

}

function randomSearch() {

}

