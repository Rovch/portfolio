import React, { Component } from 'react';
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      page: "home",
      x: 0,
      y: 0,
      x_current: 0
    }
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading(data) {
    switch (data) {
      case "home":
        setTimeout(() => {
          this.setState({ page: "home" });
        }, 2000)
        break;
      case "about":
        setTimeout(() => {
          this.setState({ page: "about" });
        }, 2000)
        break;
      case "works":
        setTimeout(() => {
          this.setState({ page: "works" });
        }, 2000)
        break;
      case "contact":
        setTimeout(() => {
          this.setState({ page: "contact" });
        }, 2000)
        break;
      default:
        this.setState({ page: "home" });
    }

    this.setState(prevState => ({
      loading: !prevState.loading,
    }));

    setTimeout(() => {
      this.setState(prevState => ({
        loading: !prevState.loading,
      }));
    }, 2400)
  }

  render() {

    let currentPage
    switch (this.state.page) {
      case "home":
        currentPage = <Home status={this.state.page} loadFunc={this.handleLoading} active={this.state.loading} />
        break;
      case "about":
        currentPage = <About status={this.state.page} loadFunc={this.handleLoading} active={this.state.loading} />
        break;
      case "works":
        currentPage = <Work status={this.state.page} loadFunc={this.handleLoading} active={this.state.loading} />
        break;
      case "contact":
        currentPage = <Home />
        break;
      default:
        currentPage = <Home />
    }
    return (
      <div className="App">
        {currentPage}
      </div>
    );
  }
}

export default App;
