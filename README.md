## HSM - FE
Frontend Repository for HSM Project



## Project top-level directory structure

```    
root
├── .next                 # next server files
├── components            # Reusable files
├── node_modules          # node modules
├── Pages                 # frontend render files
├── public                 
│   ├── imgs              # Images files here (if any)
├── styles                # Styling files here

```
  
 ### Installation
 
 1. Clone this repository `https://github.com/EphraimDev/hsm-fe.git`
 2. Navigate to the project's directory:
 3. Run `npm install` to install dependencies
 4. Run `npm install --save @zeit/next-css` to import `.css` files
 5. Create a `next.config.js` in the root of your project
 6. Run  `npm run dev` to start the server on a local host

#### Guide to configuration

- In your `next.config.js` file add the following

    ```react
    // next.config.js
    const withCSS = require('@zeit/next-css')
    module.exports = withCSS()
    ```

### Get Started
[Next.js](https://nextjs.org/)