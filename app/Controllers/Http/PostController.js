"use strict";

// Post model
const Post = use('App/Models/Post')

class PostController {
  // hardcoded posts data, will hook up MySQL later

  //index method
  async index({ view }) {
    // const posts = [
    //   {
    //     title: "Post One",
    //     body: "post one body",
    //   },
    //   {
    //     body: "post Two body",
    //   },
    //   {
    //     title: "Post Three",
    //     body: "post three body",
    //   },
    //   {
    //     title: "Post Four",
    //     body: "post Four body",
    //   },
    // ];
    const posts = await Post.all()
    return view.render("posts/index", {
      title: "Latest Posts",
      posts:posts.toJSON(),
    });
  }
}

module.exports = PostController;
