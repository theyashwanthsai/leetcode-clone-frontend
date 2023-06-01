import React from "react"
import content from "./Bloglist.jsx"

function Blogs() {


  return (
    <>
      <h1 className="text-5xl text-center p-16">Blogs</h1>
        {content.map((content, index) => (
            <div className="p-5 border-4 border-gray-800" key = {`blog-${index}`}>
                <p className="p-1">{content.date}</p>
                <h4 className="text-xl p-1">{content.title}</h4>
                <p className="p-1">{content.content}</p>
            </div>
        ))}
        
    </>
  )
}

export default Blogs
