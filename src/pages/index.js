import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>#StartYourJourney</h1>
    <div class="column right"> <img src="https://akidecoded.azureedge.net/r66img01.png" alt="Alt text"></img></div>
    <div class="column left">
      <p>We're sponsoring <a href="https://futuredecoded.microsoft.com/">Future Decoded!</a></p>
      <p>Come see us on the 1st and 2nd of October 2019 Stand 66!</p>
      <p>We've got lots of surprises in store so it's not one to miss!</p>
      <p>You can also contact us by sending an email to <a href="https://twitter.com/akarisolutions">#StartYourJourney</a> at: <a href="mailto:futuredecoded@akari.io">futuredecoded@akari.io</a></p>
      <p>Be sure to check out some more information below on some of our services - and speak to us on the stand where we can answer your questions &#128540;</p>
      <p>Check out the documents below to take you on our Route 66 Journey:</p>
      <a href="https://akidecoded.azureedge.net/Akari_Route66_Offerings.pdf"><img src="https://akidecoded.azureedge.net/Route66.png"/></a>
      <a href="https://akidecoded.azureedge.net/Akari_Automation_Offering.pdf"><img src="https://akidecoded.azureedge.net/Automation.png"/></a>
      <a href="https://akidecoded.azureedge.net/Diversity_Inclusion_Offering.pdf"><img src="https://akidecoded.azureedge.net/DiversityandInclusion.png"/></a>
      <a href="https://akidecoded.azureedge.net/NAS_Charity_Info.pdf"><img src="https://akidecoded.azureedge.net/NASCharity.png"/></a>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
    </div>
  </Layout>
)

export default IndexPage
