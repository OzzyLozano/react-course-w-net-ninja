import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops!</h2>
      <p>That page cannot be found</p>
      <Link to='/' className='button'>Back to the homepage.</Link>
    </div>
  );
}

export default NotFound;
