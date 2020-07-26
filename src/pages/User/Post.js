// cungx phair cos component header
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../../../../src/assets/css/register.css";
import { user } from "../../../constants/Config";
const shortid = require("shortid");
var baseURL = "http://localhost:4000/post/";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentPost: "",
      imagePost: null,
      id: "",
      redirectToReferre: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleChangeFile(e) {
    this.setState({
      imagePost: e.target.files[0],
    });
  }
  async handleSubmit(e) {
    e.preventDefault();
    var id = shortid.generate();
    console.log(id);
    const { imagePost, contentPost } = this.state;
    const formData = new FormData();
    formData.append("imagePost", imagePost, imagePost.name);
    formData.append("contentPost", contentPost);
    formData.append("user", user);
    await axios({
      method: "post",
      url: "create",
      baseURL: baseURL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
        this.setState({ redirectToReferre: true });

        console.log(localStorage.getItem("user"));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.redirectToReferre) {
      return <Redirect to={"/"} />;
    }
    console.log(this.state.redirectToReferre);
    if (!this.state.redirectToReferre) {
      return (
        <div className="bg-form">
          <form
            onSubmit={this.handleSubmit}
            className="register-form"
            encType="multipart/form-data"
          >
            <img
              alt="Instagram"
              className="s4Iyt logo-1"
              src="/image/instagram.png"
            ></img>
            <input
              type="file"
              name="imagePost"
              placeholder="image"
              onChange={this.handleChangeFile}
              required
            />
            <input
              type="text"
              name="contentPost"
              placeholder="content"
              value={this.state.contentPost}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Đăng</button>
          </form>
        </div>
      );
    }
  }
}
export default Post;
