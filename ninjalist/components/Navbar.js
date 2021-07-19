import Link from 'next/Link';
import Image from 'next/image'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='logo'>
                {/* traditional image placement */}
                    {/* <img src="/images/logo.png" alt="ninja logo" /> */}
                    <Image src="/images/logo.png" width={128} height={77} />

                </div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/ninjas/'>
                    <a>Ninja Listing</a>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
