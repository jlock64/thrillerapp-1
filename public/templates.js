// <input type="text" name="postDate" placeholder="postDate">
// <input type="text" name="date" placeholder="date">

module.exports = {
  createPost: [
    `<form class="form-control"><input type="text" name="name" placeholder="name">
     <input type="text" name="title" placeholder="title">
     <input type="text" name="location" placeholder="location">
     <input type="file" name="image" id="exampleInputFile">
     <textarea name="summary" rows="8" cols="40" placeholder="Add your thriller here"></textarea>
     <button type="submit" class="btn btn-default createButton" value="create">Create</button></form>`
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
  ].join(''),

  login: [
    `<input type="text" name="username" placeholder="username">
     <input type="password" name="password" placeholder="password">
     <button type="button" class="loginButton" name="login">Login</button>`
  ].join('')
}
