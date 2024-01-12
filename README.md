
# FULL-STACK CAFETERIA-FOOD-ORDERING APP 🍔🍕

using **Next.js, Prisma, Stripe, Postgres, Docke, Tailwind-CSS**



"CAFETERIA-NEXT" is a full-stack web application for cafeteria food ordering. It provides users with a seamless experience of browsing through the menu, **selecting food items**, and **placing orders** with **Secured Payments**. The project incorporates various technologies to ensure efficient data management, **User Authentication**, and a **Responsive UI**.

## Features 🚀🚀
- **Payment Gateway**

     Implemented a secure payment feature using `Stripe` for seamless and secured transactions.

- **User Authentication**

     Implemented login functionality using `NextAuth.js` with Google account integrated with `Google Cloud`

- **Database Management**

    Utilized `Prisma` and `Docker` for PostgreSQL to handle database operations efficiently.

- **Notifications**

    Integrated `React Toastify` library to provide real-time update notifications for car update order status etc...

- **Food Cart Management**

    Utilized `Zustand` for state management with `Persist-Middleware` to handle cart state across page refreshes.

- **Admin Functionalities**

    Admins can update, delete, and add products to the menu.
  
    Change the order status after payment is made by a user.

- **Responsive UI**

  Developed a fully responsive website, ensuring optimal user experience on various screen sizes.


## Tech Stack ⚙️

 
**Frontend:**

- React

- Tailwind-css

**Backend:**

- Prisma
- Docker
- Auth.js
- React Query 

**Database:**

- PostgreSQL

**State Management:**

- Zustand

**Payment Gateway:**

- Stripe


## Screenshots 📲

**HomePage:**

![Screenshot 2024-01-12 145853](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/45d33b1a-7ec7-47fe-a9a9-44d464e10721)

**Mobile-UI**:

![Screenshot 2024-01-12 155336](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/6540171f-5139-4811-a1e1-96235fff9383)

**Login Page:**

![Screenshot 2024-01-12 150122](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/09b3a835-4524-48bf-8fc5-59b7ad0cd05d)

**Payment page**:

![Screenshot 2024-01-12 151348](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/c7fa366a-7f3e-44fa-9c4e-cbff5ced7dc1)


![Screenshot 2024-01-12 171501](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/afd6e42c-bc63-4959-bc8b-696c2e11ee6f)


**Status update Page(ADMIN)**:

![Screenshot 2024-01-12 151404](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/fca0733d-9e38-458e-b82f-5228b7db4849)

**CartPage**:

![Screenshot 2024-01-12 151313](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/aed668eb-719f-4a25-a162-9c1cb06ab27f)

**MenuPage:**

![Screenshot 2024-01-12 150337](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/946e1fd6-161f-43f4-ae68-da451b9f51d4)


![Screenshot 2024-01-12 150411](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/915ef4da-35fd-426b-9a85-505934536c36)

**ProductPage:**

![Screenshot 2024-01-12 150435](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/517b6a58-7e8b-4bdd-8419-49d2bc5c600d)

**Offers:**

![Screenshot 2024-01-12 150046](https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website/assets/105294319/6136923a-719a-4d86-8008-9b313f2e0e57)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="postgresql://[username]]:[password]@localhost:5432/[dbname]?schema=public"`

`NEXTAUTH_SECRET="Any string example"`

`GOOGLE_ID=*******put yours***`

`GOOGLE_SECRET=********`

`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=********`

`STRIPE_SECRET_KEY=****`




## Run Locally

Clone the project

```bash
  git clone https://github.com/purrvvvv/Full-Stack-Cafeteria-Food-Ordering-Website.git
```

Go to the project directory

```bash
  cd cafeteria-next
```

Install dependencies

```bash
  npm install
```
Initialise Docker
```bash
  cd cafeteria-next/docker
  docker compose up
```
Set up Prisma
```bash
  npx prisma migrate dev
```

Start the server

```bash
  npm run dev
```


## 🚀 About Me
I'm a full stack developer... open to connect and work together


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/purv-shah-929562255/)


