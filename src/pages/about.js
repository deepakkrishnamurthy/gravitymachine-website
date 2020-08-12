import React from "react"
import Header from "../components/test_header"

export default function About() {
  return (
    <div style={{ color: `red` }}>
    	<Header headerText = "About" subHeaderText = "Page" />
    	<Header headerText="It's pretty cool" subHeaderText = "is it not?" /> 
      	<p>Such wow. Very React.</p>
    </div>
  )
}