import React from 'react'
import './NavBar.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menuStatus: 'drop-down-menu'
        }
    }

    handleClick = () => {
        if (this.state.menuStatus === 'drop-down-menu-open') {
            this.setState({ menuStatus: 'drop-down-menu-closed'})
        } else {
            this.setState({ menuStatus: 'drop-down-menu-open'})
        }
    }

    render() {
        return (
            <header>
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:400,400i,900|Roboto+Slab&display=swap" rel="stylesheet"></link>
                <h2 className = "site_name">Rate That Pet</h2>
                <ul id='site-nav'>
                    <li className='menu-text'>Home</li>
                    <li className='menu-text'>About</li>
                    <li className='menu-text'>Contact</li>
                    <li className='menu-text'>Donate!</li>
                    <li>
                        <img className ="MenuIcon"
                            onClick={this.handleClick}
                            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                            alt='Menu icon'
                        />
                    </li>
                    <ul className={this.state.menuStatus}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Donate!</li>
                    </ul>
                </ul>
                <div></div>
            </header>
        )
    }
}
