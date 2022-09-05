import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import HomeIcon from '../../assets/images/home.svg'
import HomeIconActive from '../../assets/images/home-active.svg'
import PeopleIcon from '../../assets/images/people.svg'
import PeopleIconActive from '../../assets/images/people-active.svg'
import DashboardIcon from '../../assets/images/dashboard.svg'
import DashboardIconActive from '../../assets/images/dashboard-active.svg'
import DelegationIcon from '../../assets/images/delegation.svg'
import DelegationIconActive from '../../assets/images/delegation-active.svg'

import './styles.scss'

const sidebarLinks = [
    {
        link: '/',
        name: 'Home',
        icon: HomeIcon,
        activeIcon: HomeIconActive,
    },
    {
        link: '/dashboard',
        name: 'Dashboard',
        icon: DashboardIcon,
        activeIcon: DashboardIconActive,
    },
    {
        link: '/people',
        name: 'dReps',
        icon: PeopleIcon,
        activeIcon: PeopleIconActive,
    },
    {
        link: '/delegation',
        name: 'Delegation',
        icon: DelegationIcon,
        activeIcon: DelegationIconActive,
    },
]

const Sidebar = () => {
    const [linkState, setLinkState] = useState('home')

    return (
        <Nav className="flex-column h-100 link-margin">
            {sidebarLinks.map(({ link, name, icon, activeIcon }) => (
                <Nav.Link
                    key={name}
                    className={`d-flex align-items-center sidebarLinks ${
                        linkState === name.toLowerCase() ? 'activeState' : ''
                    }`}
                    onClick={() => setLinkState(name.toLowerCase())}
                >
                    {linkState === name.toLowerCase() ? (
                        <Image
                            fluid
                            src={activeIcon}
                            alt="Active Icon"
                            className="d-none d-md-block d-lg-block d-xl-block pe-3"
                        />
                    ) : (
                        <Image
                            fluid
                            src={icon}
                            alt="Icon"
                            className="d-none d-md-block d-lg-block d-xl-block pe-3"
                        />
                    )}
                    {name}
                </Nav.Link>
            ))}
        </Nav>
    )
}

export default Sidebar
