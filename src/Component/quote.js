import React from "react";
import "../style.css";

//   IMPORTANT: FORK THE API TO MY REPO
export default class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      author: null,
      loading: true,
    };
    this.changeQuote = this.changeQuote.bind(this);
  }
  async componentDidMount() {
    const url =
      "https://gist.githubusercontent.com/jangdiep/7edec090b43f651285b126f313ff40f7/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    const response = await fetch(url);
    const data = await response.json();
    const localData = [];
    data.map((obj) => localData.push(obj));
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const localDataRandom = localData[getRandomInt(localData.length - 1)];
    this.setState({
      quote: localDataRandom.quote,
      author: localDataRandom.author,
      loading: false,
    });
  }
  async changeQuote() {
    const url =
      "https://gist.githubusercontent.com/jangdiep/7edec090b43f651285b126f313ff40f7/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    const response = await fetch(url);
    const data = await response.json();
    const localData = [];
    data.map((obj) => localData.push(obj));
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const localDataRandom = localData[getRandomInt(localData.length - 1)];
    this.setState({
      quote: localDataRandom.quote,
      author: localDataRandom.author,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.quote) {
      return <div>Can't find any quotes</div>;
    }
    return (
      <div className="center">
        <div>{this.state.quote}</div>
        <div> - {this.state.author}</div>
        <button onClick={this.changeQuote}>Random Quote</button>
      </div>
    );
  }
}
