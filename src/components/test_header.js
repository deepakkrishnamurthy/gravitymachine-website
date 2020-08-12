import React from "react"

// highlight-start
export default function Header(props) {
  return <h1>{props.headerText} {props.subHeaderText}</h1>
}