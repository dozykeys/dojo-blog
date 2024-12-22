const BlogList
 = ({blogs,title,deleteBlog}) => {

 
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
             {blogs.map(({ id ,title,author}) => (
        <div className="blog-preview" key={id}>
          <h2>{title}</h2>
          <p>Written by {author}</p>
          <button onClick={()=>deleteBlog(id)}>Delete</button>
        </div>
      ))}
        </div>
     );
}
 
export default BlogList
;