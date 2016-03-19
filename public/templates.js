// <input type="text" name="postDate" placeholder="postDate">
// <input type="text" name="date" placeholder="date">

module.exports = {
  createPost: [
    `<form class="">
       <input type="text" name="name" placeholder="name">
       <input type="text" name="title" placeholder="title">
       <input type="text" name="location" placeholder="location">
       <input type="file" name="image" id="inputFile">
       <textarea name="summary" rows="8" cols="40" placeholder="Add your thriller here"></textarea>
       <button type="submit" class="btn btn-default createButton" value="create">Create</button>
     </form>`
  ].join(''),

  post: [
    `<div class="postContainer">
      <div class="imgWrapper">
      <img src="*"
      </div>
      <h4 class="name" ><%= name %></h4>
      <h4 class="title"><%= title %></h1>
      <h4 class="location"><%= location %></h3>
      <div class="summaryWrapper">
        <p class="summary"><%= summary %></p>
      </div>
      <div class="buttonWrapper">
        <button class="btn btn-default edit" type="submit">Edit</button>
        <button class="btn btn-default delete" type="submit">Delete</button>
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
  `  <form class="form-horizontal">
    <div class="form-group">
    <label for="inputName3" class="col-sm-2 control-label">Username</label>
    <div class="col-sm-10">
    <input type="name" class="form-control" id="inputName3" placeholder="Name">
    </div>
    </div>
    <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
    </div>
    <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
    </div>
    </div>
    </div>
    <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
    <button type="button" class="btn btn-primary">Submit</button>
    </div>
    </div>
    </form>`

  ].join('')
}

// `<input type="text" name="username" placeholder="username">
//  <input type="password" name="password" placeholder="password">
//  <button class="btn btn-default loginButton" type="submit">Button</button>`
