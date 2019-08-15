# MaterialUI's Dark Elevation Calculation

This package helps you calculate proper elevation within your dark theme.

## Usage

```
// 1. Define your theme
import { generate } from "@alvincrespo/mui-dark-elevation";

const colors = generate();

const theme = {
  dark: {
    background: {
      colors: {
        ...colors
      }
    }
  }
};

const colors = generate();

// 2. Create the styles for your component
export const Styles = {
  Container: styled.div`
    background: ${props => props.theme.background.colors.dp_01};
    padding: 2rem;
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
  `
}

// 3. Implement styled component
import React from 'react';

export const Login = () => (
  <Styles.Container>
    {/* do stuff here */}
  </Styles.Container>
);
```

## Resources

[Material Design - Dark Theme](https://material.io/design/color/dark-theme.html)
