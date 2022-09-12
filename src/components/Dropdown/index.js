import React, { useState } from 'react'
import HomeIcon from '../../assets/images/home.svg'
import PeopleIcon from '../../assets/images/people.svg'
import DashboardIcon from '../../assets/images/dashboard.svg'
import DelegationIcon from '../../assets/images/delegation.svg'
import PenIcon from '../../assets/images/pen.svg'
import { Dropdown as DropdownNav, Image } from 'react-bootstrap'
import './styles.scss'

// const DREP = 'dRep'
const HOME = 'Home'
const BASIC = 'Basic Information'
// const DELEGATION = 'Delegation'
// const DASHBOARD = 'Dashboard'

const dropdownMainMenuLinks = [
    {
        link: '/',
        name: 'Home',
        icon: HomeIcon,
    },
    {
        link: '/dashboard',
        name: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        link: '/people',
        name: 'dReps',
        icon: PeopleIcon,
    },
    {
        link: '/delegation',
        name: 'Delegation',
        icon: DelegationIcon,
    },
]
const dropdownLinks = [
    {
        link: '/',
        name: 'Basic information',
    },
    {
        link: '/biography',
        name: 'Biography',
    },
    {
        link: '/expertise',
        name: 'Expertise / Interests',
    },
    {
        link: '/socials',
        name: 'Socials',
    },
    {
        link: '/delete',
        name: 'Delete account',
        color: true,
    },
]
const Dropdown = ({ className, dropdownMenu }) => {
    const [itemName, setItemName] = useState(HOME)
    const [linkName, setLinkName] = useState(BASIC)
    const [icons, setIcons] = useState(HomeIcon)

    function onSelect(itemNameKey) {
        setItemName(itemNameKey)

        itemNameKey === HOME
            ? setIcons(HomeIcon)
            : setIcons(PeopleIcon) &&
              setIcons(DelegationIcon) &&
              setIcons(DashboardIcon)
    }
    function onHandleSelect(linkNameKey) {
        setLinkName(linkNameKey)
        linkNameKey === linkNameKey ? setIcons(PenIcon) : null
    }

    // still need this to fix lg={4} -> d-md-none d-block
    if (dropdownMenu) {
        return (
            <DropdownNav
                className={`${className} dropDownNav align-items-center`}
                onSelect={onSelect}
            >
                <DropdownNav.Toggle
                    id="dropdown-basic"
                    className="w-100 d-flex  justify-content-between dropDownButton align-items-center"
                >
                    <div className="d-flex align-items-center">
                        <Image
                            fluid
                            src={icons}
                            alt="Active Icon"
                            className="me-3 align-items-center"
                        />
                        <p className="mb-0">{itemName}</p>
                    </div>
                </DropdownNav.Toggle>
                <DropdownNav.Menu className="w-100 border-0 p-0">
                    {dropdownMainMenuLinks.map(({ link, name, icon }) => (
                        <DropdownNav.Item
                            key={name}
                            href="#/link"
                            onSelect={onSelect}
                            eventKey={name}
                        >
                            <div className="d-flex align-items-center dropdown-item-style">
                                <Image
                                    fluid
                                    src={icon}
                                    alt="Icon"
                                    className="me-3"
                                />
                                <p className="mb-0">{name}</p>
                            </div>
                        </DropdownNav.Item>
                    ))}
                </DropdownNav.Menu>
            </DropdownNav>
        )
    }
    // Second version
    return (
        <DropdownNav
            className={`${className} dropDownNav align-items-center`}
            onSelect={onHandleSelect}
        >
            <DropdownNav.Toggle
                id="dropdown-basic"
                className="w-100 d-flex  justify-content-between dropDownButton align-items-center"
            >
                <div className="d-flex align-items-center">
                    <Image
                        fluid
                        src={PenIcon}
                        alt="Pen Icon"
                        className="me-3 align-items-center"
                    />
                    <p className="mb-0">{linkName}</p>
                </div>
            </DropdownNav.Toggle>
            <DropdownNav.Menu className="w-100 border-0 p-0">
                {dropdownLinks.map(({ link, name, color }) => (
                    <DropdownNav.Item
                        key={name}
                        href="#/link"
                        onSelect={onHandleSelect}
                        eventKey={name}
                    >
                        <div className="d-flex align-items-center dropdown-item-style">
                            <p className={`${color ? 'text-danger' : ''} m-0`}>
                                {name}
                            </p>
                        </div>
                    </DropdownNav.Item>
                ))}
            </DropdownNav.Menu>
        </DropdownNav>
    )
}

export default Dropdown
