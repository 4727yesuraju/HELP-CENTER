# Help Center API Assignment

## Instructions to run locally

0. **Drive link: How to setup locally**
   ```bash
     https://drive.google.com/file/d/114-JSdRZRnbTIdnhfSEwkdOI3xgiVa9L/view?usp=drive_link
   ```
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/4727yesuraju/HELP-CENTER
   cd HELP-CENTER
   ```

2. **command to run both frontend and api**
   - In root folder run this command `npm run build`.
   - In root folder read `sample-file.env` and replace values.
   - After that run `npm run start` command.
   - In browser paste this url `http://localhost:PORT`. Here PORT value can seen in .env file.
   - Here almost completed. Below are optional.


3. **run backend seperatly Backend:**
   - In root folder run this command `npm install` to install all dependencies.
   - After that `npm run start` to start server.

4. **run front end seperatly**
   - From root folder to move to frontend folder i.e `cd frontend`.
   - In frontend run this command `npm install` to install all dependencies.
   - After that `npm run dev` to run frontend.
   - In browser paste this url `http://localhost:3000/`

5. **Live demo is available here**
   ```bash
   https://yesuhelpcenter.onrender.com
   ```

6. **How can you implement shared functionality across a component tree?**
   - By using `useState` hook i  implement shared functionality across a component tree

7. **Why is the useState hook appropriate for handling state in a complex component**
   - `useState` hook appropriate for handling state in a complex component because there are less then 2 compenents to prop drilling.
---

