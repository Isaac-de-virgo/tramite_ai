
"use client";

import { Button, Navbar } from "flowbite-react";


export function ComponentNavbar() {
    let img = "https://play-lh.googleusercontent.com/I1foi2Irrv7tW9ee9kgP0wfnMzaVb6y17muvpKsFcUrKYsDlmCyWuTRh5m93KJZ24dY";
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={img} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Link href="/register">Register</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
