import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" />
    {props.pageResources.json.data.swapi.allFilms.map(film => (
      <div key={film.id}>{film.title}</div>
    ))}
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

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
