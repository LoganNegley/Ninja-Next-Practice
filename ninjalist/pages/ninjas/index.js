import Link from 'next/link'
import axios from 'axios'
import styles from '../../styles/Ninjas.module.css'


// a built in async function from next
export const getStaticProps = async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    // returning data after fetching and placing the info in props that the component can now use with their props
    return {
        props: { ninjas: res.data }
        }
}

const Ninjas = ({ninjas}) => {
    return (
        <div>
            {ninjas.map(item =>(
                <Link href={`/ninjas/${item.id}`} key={item.id}>
                    <a className={styles.single}>
                        <h3>{item.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Ninjas

