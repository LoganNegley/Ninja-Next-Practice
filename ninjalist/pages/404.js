import Link from 'next/Link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();

// redirects user to home page after 3 seconds
    useEffect(() =>{
        setTimeout(() => {
            // using built in router method to redirect back to home page 
            router.push('/')
        }, 3000);
    },[])
    return (
        <div className='notFound'>
            <h1>Oops..</h1>
            <h2>That page is not found</h2>
            <p>Go back to the <Link href='/'><a>Home Page</a></Link></p>
        </div>
    )
}

export default NotFound
