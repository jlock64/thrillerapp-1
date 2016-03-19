module.exports = {
  createPost: [
    `<form class="form-inline">
       <h3>Share Your Latest Thrill</h3>
         <input type="text" id="inputName" name="name" placeholder="name">
         <input type="text" id="inputTitle" name="title" placeholder="title">
         <input type="text" id="inputLocation" name="location" placeholder="location">
         <input type="text" id="inputFile" name="location" placeholder="enter url">
         <textarea name="summary" rows="8" cols="40" placeholder="Add your thriller experience here"></textarea>
       <button type="submit" class="btn btn-default createButton" value="create">Create Thriller</button>
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
      <button class="btn btn-danger edit" type="submit">Edit</button>
      <button class="btn btn-warning delete" type="submit">Delete</button>
      </div>
    </div>
    <div class="editSection">
    <input type="text" name="name" placeholder="<%= name %>">
     <input type="text" name="title" placeholder="<%= title %>">
     <input type="text" name="location" placeholder="<%= location %>">
     <input type="text" name="image" placeholder="imageUrl">
     <textarea name="summary" rows="8" cols="40" placeholder="Update your thriller here"></textarea></div>`
  ].join(''),

  // editPost: [
    // `<div class="editSection">
    // <input type="text" name="name" placeholder="<%= name %>">
    //  <input type="text" name="title" placeholder="<%= title %>">
    //  <input type="text" name="location" placeholder="<%= location %>">
    //  <input type="text" name="postDate" placeholder="<%= postDate %>">
    //  <input type="text" name="date" placeholder="<%= date %>">
    //  <input type="text" name="image" placeholder="imageUrl">
    //  <textarea name="summary" rows="8" cols="40" placeholder="Update your thriller here"></textarea></div>`
  // ].join(''),

  login: [
  `  <form class="form-horizontal login-form">
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
