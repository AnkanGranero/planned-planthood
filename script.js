import {blogPosts} from "./blog-posts.js";
console.log(blogPosts);

const blogPostGrid = document.getElementById("blog-posts");
blogPosts.forEach((blogPost, index) => {
    const article = document.createElement("article");
    article.className = "blog-post"

    const img = document.createElement("img");
    img.src = "https://picsum.photos/180/208";
    article.appendChild(img);

    const ul = document.createElement("ul");
    ul.className = "tags"
    blogPost.tags.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag;
        ul.appendChild(li);
    })
    article.appendChild(ul);

    const paragraph = document.createElement("p");
    paragraph.textContent = blogPost.body;
    article.appendChild(paragraph);


    const footer = document.createElement("footer");
    const userPicture = document.createElement("img");
    userPicture.src = `https://avatar.iran.liara.run/public/${index}`;
    userPicture.alt = "user avatar";
    footer.appendChild(userPicture);

    const userInfo = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = blogPost.meta.userName;
    const time = document.createElement("time");
    time.textContent = blogPost.meta.time;

    userInfo.appendChild(strong)
    userInfo.appendChild(time)
    footer.appendChild(userPicture);


    blogPostGrid.appendChild(article)
    
});