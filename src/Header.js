import React from 'react';
import "./Header.css";
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider'

const Header = () => {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged in user */}
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL} />
                {/* Time Icons for logged in user */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                {/* input */}
                <input type="text" Placeholder="Search Cleaver Programmer" />

            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>

        </div>
    )
}

export default Header
