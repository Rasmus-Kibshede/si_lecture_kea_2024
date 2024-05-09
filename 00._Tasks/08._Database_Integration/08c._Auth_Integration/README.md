# Setup

## setup

`Vite react`

```bash
    npm create vite@latest
```

`Auth0`
This install will also be a part of Auth0 guide

```bash
    npm install @auth0/auth0-react
```

- Choose react with javascript without the SWC tool

## Signup to Auth0

- https://manage.auth0.com/

1. Click on the 'Applications' in the menu to the right</br>
   <image src='image.png' width='300px'>
2. Click on the blue button on the top of the page called 'create application'</br>
   <image src='image-1.png' width='600px'>
3. Choose a name for the application and the application type. This project is called 'My App' and is using 'Sigle page web application' as the apllication type</br>
   <image src='image-2.png' width='600px'>
4. Now select the technology. Choose React </br>
   <image src='image-3.png' width='600px'>
5. The is the option to use their sample app or to follow the simple guide step by step</br>
   <image src='image-4.png' width='600px'>

## Custom components/pages

`Main.jsx`

```
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
```

## Env placeholder

- Create a .env file in the project root

```
    VITE_AUTH0_DOMAIN=<Domain>
    VITE_AUTH0_CLIENT_ID=<client_id>
```

# Other tools with SSO

- Firebase
- Supabase

# Env with Vite

https://vitejs.dev/guide/env-and-mode
