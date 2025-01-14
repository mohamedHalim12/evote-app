# evote-app

A simulation of online voting using basic nodejs, express and openPGP for encryption.

## Testing

1. First you need to install [mongodb server](https://www.mongodb.com/try/download/community) in you machine

   - 🤭 By the way you can Fork 🐸 and star 💓 ⭐ the repo

1. Install [NodeJs](https://nodejs.org/en/download/) version > 10. Though, NodeJs LTS version 14 is recommended.
1. Clone the repo using one of the two methods:
   ```bash
     # Using https link
     git clone https://github.com/faouziMohamed/evote-app.git
   ```
   ```bash
    # Or using the ssh link
    git git@github.com:faouziMohamed/evote-app.git
   ```
1. Change directory to `evote-app` and install dependencies:

   ```bash
     cd evote-app
   ```

   - Install dependencies using `npm`

     ```bash
     npm install
     ```

   - Or using `yarn`
     ```bash
     yarn
     ```
1. For testing purpose create a file called `.env` in the root of the project (`evote-app`) and paste the following content:  
    This file will not be stagged into Git, Keep it only localy.
    ```plain
      JWT_SECRET = 'superPassword'
      JWT_EXPIRY = '30d'
      JWT_ALGORITHM = 'HS256'
      PORT = '3000'
      DB_URL = 'mongodb://localhost:27017/evote-app'
    ```
1. Then run tests on local typing:
   |npm |-| yarn|
   |-----|-|----|
   |`npm run dev`|Or|`yarn dev`|
1. Open in your browser the url http://localhost:3000 to see result

### PROGRESS
For now only **RESTFULL API** are being built, use a tool like [Insomnia](https://insomnia.rest/download "Go to download page of Insomnia") or [Postman](https://www.postman.com/downloads/ "Download page of Postman") to test API routes.

## 🆗 That's it!!!

LICENSE [MIT](LICENSE)
