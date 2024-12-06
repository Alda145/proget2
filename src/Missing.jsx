import { Link } from 'react-router-dom';
const Missing = () => {
    return (
        <main className='Missing'>

            <h2>Post not found</h2>
            <p>Well , that's disappointing</p>
            <p>
                <Link to='/'>visit our Homepage</Link>

            </p>


        </main>
    )
}

export default Missing;