// Mostly took this from React docs
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // good place to log the error info to New Relic, etc.
    console.error("ErrorBoundary caught an error ", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <div className="details">
          <h2>
            There's a problem with this listing.{" "}
            <Link to="/"> Click to go back </Link> or wait five seconds.
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
