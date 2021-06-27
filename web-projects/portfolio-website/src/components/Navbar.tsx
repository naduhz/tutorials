import React from "react";

import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  // const firstField = useRef();

  return (
    <header>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navbar;
