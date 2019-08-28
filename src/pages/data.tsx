import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => {
  let allFilms = []

  if (
    props &&
    props.pageResources &&
    props.pageResources.json &&
    props.pageResources.json.data &&
    props.pageResources.json.data.swapi
  ) {
    allFilms = props.pageResources.json.data.swapi.allFilms || []
  }

  return (
    <Layout>
      <SEO title="Page two" />
      {allFilms.map(film => (
        <div key={film.id}>{film.title}</div>
      ))}
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  {
    swapi {
      allFilms {
        id
        title
      }
    }
  }
`
