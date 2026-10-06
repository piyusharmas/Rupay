# Rupay

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-Local%20or%20Atlas-47A248?logo=mongodb&logoColor=white)

Rupay is a full-stack trading and brokerage prototype built to mirror the overall flow of a modern investment platform. The project combines a public brokerage website, a portfolio dashboard, and a MongoDB-backed API so developers can explore how a fintech product can be structured across multiple apps.

## What the project does

This repository contains three connected applications:

- `frontend/` — a public-facing brokerage landing site for home, pricing, products, support, and signup flows
- `dashboard/` — an investor dashboard with holdings, positions, orders, funds, and summary views
- `backend/` — an Express.js API that serves trading data from MongoDB to the dashboard

The result is a realistic multi-app fintech workspace that demonstrates how a marketing site and an internal portfolio experience can coexist in a single project.

## Why this project is useful

- Showcases a multi-application architecture for a finance product
- Demonstrates React routing, reusable UI sections, and API-driven data loading
- Provides a ready-made pattern for building portfolio and brokerage dashboards
- Helps developers learn how a backend API and frontend apps can work together locally
- Serves as a solid foundation for adding authentication, live market data, and deployment workflows

## Project structure

```text
Rupay/
├── backend/
│   ├── index.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── models/
│   └── schemas/
├── dashboard/
│   ├── src/
│   ├── public/
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── docs/
│   └── CONTRIBUTING.md
├── .github/
├── .gitignore
├── README.md
└── package.json
```

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18 or later
- npm
- MongoDB running locally, or a valid MongoDB Atlas connection string

## Getting started

### 1) Install dependencies

```bash
cd backend
npm install

cd ../dashboard
npm install

cd ../frontend
npm install
```

### 2) Configure the backend environment

Copy the example environment file:

```bash
cd backend
cp .env.example .env
```

Then update `.env` with a MongoDB connection and port:

```env
PORT=4000
MONGO_URL=mongodb://127.0.0.1:27017/rupay
```

If you are using MongoDB Atlas, replace the `MONGO_URL` value with your cluster URL.

### 3) Start the backend API

```bash
cd backend
npm start
```

The API will run on:

```text
http://localhost:4000
```

### 4) Start the dashboard

```bash
cd dashboard
PORT=3000 npm start
```

Open:

```text
http://localhost:3000
```

### 5) Start the public frontend

```bash
cd frontend
PORT=3001 npm start
```

Open:

```text
http://localhost:3001
```

> The frontend and dashboard are both React apps, so they should run on separate ports to avoid conflicts.

## API overview

The backend exposes portfolio data for the dashboard. Common endpoints are:

```bash
GET http://localhost:4000/allHoldings
GET http://localhost:4000/allPositions
GET http://localhost:4000/allOrders
POST http://localhost:4000/newOrder
```

Example request:

```bash
curl -X POST http://localhost:4000/newOrder \
  -H "Content-Type: application/json" \
  -d '{"name":"TCS","qty":1,"price":3200,"mode":"CNC"}'
```

## Local workflow

This project is currently a development prototype, not a production brokerage system. The standard local workflow is:

1. Start MongoDB
2. Run the backend API
3. Start the dashboard app
4. Start the public frontend app
5. Use the dashboard to view holdings, positions, and orders from the API

## Where users can get help

- Read the application code in `backend/index.js` and the dashboard components in `dashboard/src/components/`
- Inspect the React routing setup in `frontend/src/index.js` and `dashboard/src/components/Dashboard.js`
- Review the project scripts in each app’s `package.json`
- For contribution guidance, see [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

## Who maintains and contributes

This project is maintained by the repository contributors and is intended for learning, experimentation, and frontend/backend practice. Contributions are welcome for improvements to the UI, API, architecture, or documentation.

If you want to help:

1. Fork the repository
2. Create a feature branch
3. Make your changes locally
4. Validate the app in development mode
5. Submit a pull request with a clear description of the update

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for the repository contribution workflow.

## Notes

- The project uses sample portfolio data and a MongoDB-backed structure, rather than live market integration.
- Both React apps were bootstrapped with Create React App and currently rely on local development ports.
- This is a good starting point for adding user authentication, real-time market pricing, and deployment automation.
