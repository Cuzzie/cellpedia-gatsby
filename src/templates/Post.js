import React from 'react'
import { graphql } from "gatsby"
import Sidebar from "../components/Sidebar"
import SelectLangWithLinks from "../components/SelectLangWithLinks"
import "../styles/Post.styl"
import { isEng } from "../utils/utils"

const Post = ({ data }) => {
  const { lang } = data.markdownRemark.frontmatter
  return (
    <div>
      <Sidebar lang={lang} />
      <div className="content" style={{ paddingLeft: isEng(lang) ? "230px" : "201px" }}>
        <div className="lang">
          <SelectLangWithLinks slug={data.markdownRemark.fields.slug} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html   
      frontmatter {
        title
        lang
      }
      fields {
        slug
      }
    } 
  }
`

export default Post