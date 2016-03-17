module.exports = {
  createPost: [
    `<input type="text" name="name" placeholder="name">
     <input type="text" name="title" placeholder="title">
     <input type="text" name="location" placeholder="location">
     <input type="text" name="postDate" placeholder="postDate">
     <input type="text" name="date" placeholder="date">
     <input type="text" name="image" placeholder="imageUrl">
     <textarea name="summary" rows="8" cols="40" placeholder="Add your thriller here"></textarea>`
  ].join(''),

  post: [
    `<div class="imgContainer">
      <h3 class="location"><%= location %></h3>
      <h1 class="title"><%= title %></h1>
    </div>
    <h4 class="name" ><%= name %></h4>
    <span class="postDate"><%= postDate %></span>
    <h4 class="date" ><%= date %></h4>
    <div class="summaryWrapper">
      <p class="summary"><%= summary %></p>
      <div class="favoriteWrapper">
        <input type="checkbox" class="favCheckbox">
      </div>
    </div>`
  ].join(''),

  editPost: [
    `<input type="text" name="name" placeholder="<%= name %>">
     <input type="text" name="title" placeholder="<%= title %>">
     <input type="text" name="location" placeholder="<%= location %>">
     <input type="text" name="postDate" placeholder="<%= postDate %>">
     <input type="text" name="date" placeholder="<%= date %>">
     <input type="text" name="image" placeholder="imageUrl">
     <textarea name="summary" rows="8" cols="40" placeholder="Update your thriller here"></textarea>`
  ].join('')
}
