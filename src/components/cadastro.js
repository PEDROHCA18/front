

import '@/components/css/login.css';
import Link from 'next/link';
import React from 'react';
import login from "@/components/img/l.png";

import Image from "next/image";
const SlideNavbar = () => {
  return (
    <div>
      <h1>GYM ACADEMY</h1>
     
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup" style={formContainerStyle}>
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="Seu nome" required="" />
            <input type="email" name="email" placeholder="E-mail" required="" />
            <input type="password" name="pswd" placeholder="senha" required="" />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login" style={formContainerStyle}>
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="E-mail" required="" />
            <input type="password" name="pswd" placeholder="senha" required="" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;

const formContainerStyle = {
  fontFamily: 'Jost, sans-serif',
  textAlign: 'center',
  marginTop: '50px',
};
