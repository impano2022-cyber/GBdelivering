# WhatsApp E-commerce Platform - GBdelivering

This project is a WhatsApp-based e-commerce platform for selling meat products in flexible quantities, with a full-featured admin dashboard for site management.

## Project Structure

The project is divided into two main parts:

-   `backend/`: A Node.js and Express application that handles the business logic, API, and WhatsApp integration.
-   `frontend/`: A React application for the admin dashboard.

## Key Features

### Customer Facing (WhatsApp Bot)

-   Browse product categories.
-   View product details and prices.
-   Add products to a shopping cart in various units (grams, kilos, pc, pkt).
-   Manage the shopping cart (view, update, clear).
-   Place orders.
-   Receive order confirmations.

### Admin Dashboard

-   Secure login for administrators.
-   **Dashboard:** An overview of sales, orders, and customers.
-   **Product Management:**
    -   Add, edit, and delete products.
    -   Bulk edit products.
    -   Manage inventory.
-   **Order Management:**
    -   View and manage incoming orders.
    -   Update order statuses.
-   **Site & Design Customization:**
    -   Customize the frontend design and layout.
    -   Manage themes.
-   **All Site Management:** Full control over the application settings.

## Getting Started

### Prerequisites

-   Node.js and npm
-   A database (e.g., PostgreSQL)
-   A WhatsApp Business API provider account (e.g., Twilio)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/impano2022-cyber/GBdelivering.git
    cd GBdelivering
    ```

2.  **Set up the backend:**
    ```bash
    cd backend
    npm install
    # Create a .env file and add your configuration (database, WhatsApp API keys, etc.)
    npm start
    ```

3.  **Set up the frontend:**
    ```bash
    cd ../frontend
    npm install
    npm start
    ```
