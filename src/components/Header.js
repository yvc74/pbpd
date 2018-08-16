import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Collapse, 
    Navbar, 
    NavbarBrand, 
    Nav,
    NavbarToggler,
    NavItem, 
    NavLink, 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';

import './assets/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>GoodWill Dispatch</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse className="justify-content-end" isOpen = { this.state.collapse } navbar>
                    <Nav>
                        <NavItem>
                            <NavLink tag={Link} to="/">Admin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/dispatch">Dispatch</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/stores">Stores</NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret></DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to="/reports">Reports</DropdownItem>
                                <DropdownItem tag={Link} to="/profile">Your Profile</DropdownItem>
                                <DropdownItem tag={Link} to="/settings">Settings</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}