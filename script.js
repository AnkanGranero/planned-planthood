import {blogPosts} from "./blog-posts.js";
console.log(blogPosts);

const blogPostGrid = document.getElementById("blog-posts");
blogPosts.forEach((blogPost, index) => {
    const article = document.createElement("article");
    article.className = "blog-post"

    const img = document.createElement("img");
    img.src = `https://picsum.photos/id/${index}/180/208`;
    article.appendChild(img);

    const ul = document.createElement("ul");
    ul.className = "tags"
    blogPost.tags.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag.title;
        li.classList.add(tag.class);
        ul.appendChild(li);
    })
    article.appendChild(ul);

    const section = document.createElement("section");
    const header = document.createElement("h3");
    header.textContent = blogPost.title;
    section.appendChild(header);
    const paragraph = document.createElement("p");
    paragraph.textContent = blogPost.body;
    section.appendChild(paragraph);
    article.appendChild(section);


    const footer = document.createElement("footer");
    const userPicture = document.createElement("img");
    userPicture.src = `https://avatar.iran.liara.run/public/${index}`;
    userPicture.alt = "user avatar";
    footer.appendChild(userPicture);

    const p = document.createElement("p");
    const userName = document.createElement("strong");
    userName.textContent = blogPost.meta.userName;
    const time = document.createElement("time");
    time.textContent = blogPost.meta.date;

    p.appendChild(userName)
    p.appendChild(time)
    footer.appendChild(userPicture);
    footer.appendChild(p);
    article.appendChild(footer);

    blogPostGrid.appendChild(article)
    
});