import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <DiCssdeck size="3rem" /> Portfolio
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={handleToggleMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink to="/about" onClick={handleToggleMenu}>About</NavLink>
          <NavLink to="/skills" onClick={handleToggleMenu}>Skills</NavLink>
          <NavLink to="/experience" onClick={handleToggleMenu}>Experience</NavLink>
          <NavLink to="/projects" onClick={handleToggleMenu}>Projects</NavLink>
          <NavLink to="/education" onClick={handleToggleMenu}>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink to="/about" onClick={handleToggleMenu}>About</MobileLink>
            <MobileLink to="/skills" onClick={handleToggleMenu}>Skills</MobileLink>
            <MobileLink to="/experience" onClick={handleToggleMenu}>Experience</MobileLink>
            <MobileLink to="/projects" onClick={handleToggleMenu}>Projects</MobileLink>
            <MobileLink to="/education" onClick={handleToggleMenu}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
