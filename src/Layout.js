import React from 'react';
import Navbar from './Navbar';
import { ThemeContextConsumer } from './ThemeContex';

export default function Layout(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div>
          <div className={`header ${context.theme}`}>
            <Navbar />
          </div>
          {props.children}
        </div>
      )}
    </ThemeContextConsumer>
  );
}
