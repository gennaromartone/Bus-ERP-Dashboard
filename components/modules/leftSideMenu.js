import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

const LeftSideMenu = ({}) => {
    const router = useRouter()
    return(
        <ul>
            <li><img className="logo" src="/icon/svg/logo_nav.svg" alt="logo"></img></li>

            <li className={router.pathname == '/'?'selected':''}><Link href="/"><div><img src={router.pathname == '/'?"/icon/svg/service_orders.svg":"/icon/svg/service_orders_ns.svg"} alt="service orders"></img><span className="menu_text">Service Orders</span></div></Link></li>
            <li><Link href=""><div><img src="/icon/svg/invoices.svg" alt="invoices"></img><span className="menu_text">Invoices</span></div></Link></li>
            <li className={router.pathname == '/clients'?'selected':''}><Link href="/clients"><div><img src={router.pathname == '/clients'?"/icon/svg/companies_s.svg":"/icon/svg/companies.svg"} alt="companies"></img><span className="menu_text">Clients</span></div></Link></li>
            <li><img src="/icon/svg/elevator.svg" alt="elevator"></img><span className="menu_text">Elavators</span></li>
            <li><img src="/icon/svg/analytics.svg" alt="analytics"></img><span className="menu_text">Analytics</span></li>
            <style jsx>{`
                div{
                    position: relative;
                    display: flex;
                }
                ul{
                    list-style: none;
                    height: 100vh;
                    width: 100%;
                    text-align: left;
                    display: block;
                    transition: all 0.5s ease;
                    padding: 1.2rem .75rem;
                    background-color: #134460;
                    margin: 0;
                }
                ul:hover{
                    width:22vw;
                }
                ul:hover li span{
                    display: initial;
                    padding: .5rem;
                    opacity: 1;
                }
                li span{
                    opacity:0;
                    display: none;
                    transition: all 1s ease; 
                    min-width: 10rem;
                    font-size:.9rem;
                    font-weight: 800;
                    margin-left: .8rem;
                        
                }
                
                .logo{
                    width: 14rem;
                }

                .selected{
                    background-color: #00D1FF;
                    color:#054460;
                }

                li{
                    padding: .5rem;
                    border-radius: 4px;
                    margin-bottom: 1rem;
                    overflow: hidden;
                    display: flex;
                    height: 3rem;
                    color: #1596AF;
                    cursor:pointer;
                }

                li :first-child{
                    margin-bottom: 8rem;
                    background-color: unset;
                    padding: 0;
                    display: block;
                }
                
            `}</style>
        </ul>
    )
}

export default LeftSideMenu;