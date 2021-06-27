import React from "react";

import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import MenuLinks from './MenuLinks'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen}
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default Navbar;
