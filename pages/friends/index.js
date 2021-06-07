import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Freinds.module.css'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            friends: data
        }
    }
}

const Friends = ({friends}) => {
    return (
        <div>
            <h1>All Friends</h1>
            {
                friends.map((friend) => {
                    return <Link href={'/friends/'+friend.id} key={friend.id}>
                        <a className={styles.single}>
                            <h3>{friend.name}</h3>
                        </a>
                    </Link>
                })
            }
        </div>
    );
};

export default Friends;
