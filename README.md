# Car Dealer App

A simple web application that allows users to filter cars by make and model year, and view the results on a separate page. Built with Next.js, Tailwind CSS, and TypeScript.

### Features

Filter cars by make and year.

View a list of car models for the selected make and year.

Responsive design with Tailwind CSS.

### Technologies

- Next.js - React framework for server-side rendering and static site generation.

- Tailwind CSS - Utility-first CSS framework.

- TypeScript - For type-safe development.

- VPIC API - API for fetching car data.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)

- npm (v9 or higher)

### Installation

1. Clone the repository:

#### Copy

```
git clone https://github.com/your-username/car-dealer-app.git
cd car-dealer-app
Install dependencies:
```

```
npm install
```

#### Start the development server:

```
npm run dev
```

Open http://localhost:3000 in your browser.

### Screenshots

### Project Structure

car-dealer-app/ <br />
├── app/<br />
│ ├── page.tsx # Home page with filters<br />
│ ├── page/<br />
│ │ └── [makeId]/<br />
│ │ └── [year]/<br />
│ │ └── page.tsx # Results page<br />
├── public/<br />
│ └── screenshots/ # Folder for screenshots<br />
├── tailwind.config.js # Tailwind CSS configuration<br />
├── tsconfig.json # TypeScript configuration<br />
└── README.md # This file<br />
