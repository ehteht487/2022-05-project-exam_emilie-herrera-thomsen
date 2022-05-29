const blogContainer = document.querySelector(".contentContainer"); 


const url = "https://freshfrontend.com/exam/wp-json/wp/v2/posts?_embed";

async function getPosts(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    json.forEach(function(blog) {
        blogContainer.innerHTML += `<a href="blogspecific.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
                                    <p>${blog._embedded['wp:featuredmedia']['0'].source_url}</p>`
        
    });

    

}

getPosts(url);

