const bloContainer = document.querySelector(".contentContainer"); 

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

console.log(id)

const url = "https://freshfrontend.com/exam/wp-json/wp/v2/posts?_embed" + id;

async function getBlog() {
    try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)

    bloContainer.innerHTML = `<h3>Title: ${json.title.rendered}</h3>
                            `

    }

    catch(error) {
        console.log(error)
        housesContainer.innerHTML = `<div class="error">An error occurred</div>`
    }
    

};

getBlog();