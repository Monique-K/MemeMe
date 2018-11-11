import React from "react"
import "./search.scss"

export class SearchBar extends React.Component {

  render() {
    return (
      <div className="searchbar-container">
        <form className="searchbar-form">
          <input className="searchbar-input" placeholder="Keyword search" />
          <br />
          <button className="searchbar-button" type="submit">Meme me!</button>
        </form>
      </div>
    )
  }
}