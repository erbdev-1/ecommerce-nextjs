# Next.js E-commerce Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the **Next.js E-commerce** project! This application is a full-featured e-commerce platform built with Next.js, leveraging the latest web technologies to deliver a seamless shopping experience. It includes user authentication, product management, shopping cart functionality, and an administrative dashboard for managing products and users.

## Features

- **User Authentication:** Secure login and registration using [NextAuth](https://next-auth.js.org/).
- **Product Management:** CRUD operations for products with Prisma ORM.
- **Shopping Cart:** Users can add, update, and remove items from their cart.
- **Admin Dashboard:** Accessible only to admin users for managing products and users.
- **Responsive Design:** Built with [Tailwind CSS](https://tailwindcss.com/) for a responsive and modern UI.
- **Server-Side Rendering:** Optimized for performance and SEO with Next.js.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

## Project Structure

Here's an overview of the project's directory structure:
.
├── .env
├── .gitignore
├── .next/
│   ├── app-build-manifest.json
│   ├── build/
│   ├── build-manifest.json
│   ├── cache/
│   ├── fallback-build-manifest.json
│   ├── package.json
│   ├── react-loadable-manifest.json
│   ├── server/
│   ├── static/
│   ├── trace
│   ├── transform.js
│   └── types/
├── app/
│   ├── actions/
│   ├── admin/
│   ├── api/
│   ├── cart/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   ├── login/
│   ├── page.tsx
│   ├── product/
│   └── register/
├── eslint.config.mjs
├── hooks/
│   └── ...
├── libs/
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pages/
├── postcss.config.mjs
├── prisma/
│   └── schema.prisma
├── provider/
├── public/
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── utils/

## Key Directories and Files

- **`app/`**: Contains the main application code, including pages, components, and actions.
- **`admin/`**: Admin-specific pages and components.
- **`api/`**: API route handlers.
- **`components/`**: Reusable React components.
- **`actions/`**: Server-side actions like fetching data.
- **`hooks/`**: Custom React hooks.
- **`libs/`**: Shared libraries and utilities.
- **`prisma/`**: Prisma ORM setup and database schema.
- **`public/`**: Static assets like images and fonts.
- **`utils/`**: Utility functions and helpers.
- **`README.md`**: Project documentation.
- **`next.config.ts`**: Next.js configuration.
- **`tailwind.config.ts`**: Tailwind CSS configuration.

## Environment Variables

Create a .env file in the root directory and add the following environment variables:

# Database URL

DATABASE_URL="your_database_url"

# NextAuth Secret

NEXTAUTH_SECRET="your_nextauth_secret"

# JWT Secret

JWT_SECRET="your_jwt_secret"

# Other environment variables...# Database URL

DATABASE_URL="your_database_url"
