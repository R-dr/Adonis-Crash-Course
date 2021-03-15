"use strict";

class PostController {
  //index method
  async index({ view }) {
    return view.render("posts/index", {
      title: "latest Posts",
    });
  }
}

module.exports = PostController;
