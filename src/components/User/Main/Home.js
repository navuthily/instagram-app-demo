import React, { Component } from "react";
import Timeline from "../Main/Timeline/Timeline";
import Story from "../Main/Timeline/Story";
import callApi from "../../../utils/apiCaller";
class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    callApi("post/ap", "get", null).then((res) => {
      console.log(res);
      if (res && res.data) {
        this.setState({
          posts: res.data,
        });
      }
    });
  }
  render() {
    var posts = this.state.posts;
    console.log('posst nf sao khoor quas thees')
    console.log(posts)
    return (
      <div>
        <Story />
        <>
          {posts.map((item, index) => {
            var a = item.comments;
            var b = a.map((x, inde) => {
              console.log(x.commentByUser);
              return x.commentByUser;
            });
            var f = a.map((x, inde) => {
              console.log(x.commentByUser);
              return x.contentComment;
            });
            var c = item.hearts;
            var d = c.map((x, inde) => {
              return x.quantity;
            });
            var sum = 0;
            for (let i = 0; i < d.length; i++) {
              sum += d[i];
            }
            return (
              <Timeline
                key={index}
                id={item.id}
                items={item}
                contentPost={item.contentPost}
                imagePost={item.imagePost}
                userNamePost={item.userName}
                like={sum}
                commentByUser={b}
                contentComment={f}
              />
            );
          })}
        </>
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
