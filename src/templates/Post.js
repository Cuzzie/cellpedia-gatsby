import React, { useState } from 'react'
import { graphql } from "gatsby"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import SelectLangWithLinks from "../components/SelectLangWithLinks"
import { SidebarProvider } from "../context/SidebarContext"
import { isEng } from "../utils/utils"
import "../styles/Post.styl"

const Post = ({ data }) => {
  const { lang } = data.markdownRemark.frontmatter

  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <SidebarProvider value={{ showSidebar, toggleSidebar }}>
      <div>
        <Sidebar lang={lang} />
        <div className={`main${isEng(lang) ? " eng" : ""}${showSidebar ? " pushed" : ""}`}>
          <Header />
          <div className="content">
            <div className="lang">
              <SelectLangWithLinks slug={data.markdownRemark.fields.slug} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </div>
        </div>
      </div>
    </SidebarProvider>
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