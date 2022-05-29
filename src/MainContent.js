import React from 'react';
import { ThemeContextConsumer } from './ThemeContex';

export default function MainContent() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div class={`content ${context.theme}`}>
          <h1>Welcome to my app</h1>
          <p>Use Context API to share data between component</p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
