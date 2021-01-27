import styles from './layout.module.css';

import LeftSideMenu from './../modules/leftSideMenu';

import UserHeader from './../modules/userHeader';


export default function Layout({ children, user }) {

    //console.log(user)
    return <main className={styles.main}>
                <nav className={styles.nav}>
                    <LeftSideMenu/>
                </nav>

                <header className={styles.header}>
                    <UserHeader user={user}/>
                    {/* <div></div> */}
                </header>
                
                <div className={styles.container}>
                    {children}
                </div>
            </main>
}