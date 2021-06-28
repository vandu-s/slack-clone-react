import React from 'react';
import "./Header.css";
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged in user */}
                <Avatar
                    className="header__avatar"
                    alt="Vandana Singandipe"
                    src="" />
                {/* Time Icons for logged in user */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                {/* input */}
                <input type="Search Cleaver Programmer" />

            </div>
            <div className="header__right">
                {/* help icon */}
            </div>

        </div>
    )
}

export default Header