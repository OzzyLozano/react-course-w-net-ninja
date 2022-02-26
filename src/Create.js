import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = e => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsLoading(true)

    fetch('http://localhost:8000/blogs', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsLoading(false)
      navigate('/')
    })
  }

  return (
    <div className="create">
      <h1>Add a new blog</h1>
      <form className='create-form' onSubmit={handleSubmit}>
        <label className='create-label'>Blog title:</label>
        <input 
          type="text"
          className='create-fields'
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label className='create-label'>Blog body:</label>
        <textarea 
          className='create-fields'
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        >
        </textarea>
        <label className='create-label'>Blog author:</label>
        <select 
          className='create-fields'
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isLoading && <button className='button'>Add Blog</button>}
        { isLoading && <button className='button' disabled>Adding Blog...</button>}
        <div className="pt-3 pb-2">
          <h5>blog preview...</h5>
        </div>
        <div className="borde py-3 px-2">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </form>
    </div>
  );
}

export default Create;
