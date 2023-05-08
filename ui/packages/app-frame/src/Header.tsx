import type { Component } from 'solid-js';
import Logo from "../assets/logo.svg"

export const Header: Component = () => {
  return (
    <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      <div class="container-fluid d-flex align-items-center">
        <Logo/>
      </div>
    </header>
  )
}
