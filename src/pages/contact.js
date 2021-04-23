import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="contact" />
      <main class="page">
        <section class="contact-page">
          <article class="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Chambray master cleanse williamsburg slow-carb schlitz quinoa.
              Distillery semiotics fanny pack unicorn affogato next level offal
              put a bird on it selvage ugh typewriter ennui. Coloring book beard
              migas VHS, banh mi viral keytar actually offal chambray godard
              microdosing cred pabst. Flexitarian offal whatever church-key
              typewriter aesthetic taiyaki blog mixtape brunch jean shorts.
              Sriracha artisan portland try-hard, umami venmo coloring book +1.
            </p>
            <p>
              Cliche man braid activated charcoal slow-carb, flexitarian DIY
              vegan. Semiotics live-edge hot chicken chillwave, celiac synth
              fixie literally iceland try-hard. Raclette sustainable you
              probably haven't heard of them, drinking vinegar austin edison
              bulb pickled. Godard direct trade snackwave wolf palo santo migas,
              whatever distillery kogi.
            </p>
            <p>
              Kale chips chillwave biodiesel, photo booth taxidermy pour-over
              skateboard fam raw denim keffiyeh gochujang put a bird on it.
            </p>
          </article>
          <article>
            <form
              class="form contact-form"
              action="https://formspree.io/f/xqkwanll"
              method="POST"
            >
              <div class="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" class="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: contentful_id, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
