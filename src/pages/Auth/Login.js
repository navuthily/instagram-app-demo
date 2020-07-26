import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.style.css";
import "bootstrap/dist/css/bootstrap.min.css";

var baseURL = "http://localhost:4000/";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async login(e) {
    e.preventDefault();
    const { email, password } = this.state;
    await axios({
      method: "post",
      url: "login",
      baseURL: baseURL,
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        const { token, user } = response.data;
        axios.defaults.headers.common["x-access-token"] = token;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({ redirectToReferrer: true });
      })
      .catch((error) => {
        console.log("login error : " + error);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className="" id="Body">
        <div className="yOZjD _80tAB row">
          <div className="col-lg-12 col-xl-12 col-md-12">
            <div className="bg-form">
              <form onSubmit={this.login} className="login-form">
                <img
                  alt="Instagram"
                  className="s4Iyt logo-1"
                  src="/image/instagram.png"
                ></img>
                <input
                  placeholder="Số điện thoại, tên người dùng hoặc email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Mật khẩu"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button type="submit">Đăng nhập</button>
                <p>Hoặc</p>
                <div>
                  <a href="#"> Đăng nhập bằng Facebook</a>
                </div>
                <div>
                  <a className="forget-pass" href="#">
                    {" "}
                    Quên mật khẩu
                  </a>
                </div>
              </form>
            </div>
            <div className="bg-form">
              <div className="form-2">
                <p className="ask">Bạn không có tài khoản? </p>
                <a href="/register">Đăng kí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
