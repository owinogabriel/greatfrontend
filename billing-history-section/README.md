# Invoice Management System

A responsive invoice management application built with Next.js, TypeScript, and Tailwind CSS. This application displays invoice data in a user-friendly table format with full mobile responsiveness.

## 🚀 Features

- **Responsive Design**: Optimized for both desktop and mobile devices  
- **Modern UI**: Clean, professional interface built with Tailwind CSS  
- **TypeScript Support**: Full type safety throughout the application  
- **API Integration**: RESTful API endpoint for data fetching  
- **Local Data Management**: JSON file-based data storage  
- **Invoice Status Tracking**: Visual status indicators for payment status  
- **Download Links**: Direct access to invoice documents  

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ with React  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **API**: Next.js API Routes  
- **Data Storage**: Local JSON file  

## 📁 Project Structure

```
├── pages/
│   ├── api/
│   │   └── invoice.ts          # API endpoint for invoice data
│   ├── index.tsx               # Main invoice display page
│   └── _app.tsx                # Next.js app configuration
├── data/
│   └── invoices.json           # Local invoice data storage
├── components/
│   └── InvoiceTable.tsx        # Invoice table component
├── types/
│   └── invoice.ts              # TypeScript type definitions
└── styles/
    └── globals.css             # Global styles and Tailwind imports
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd billing-history-section
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 API Endpoint

### GET /api/invoice

Retrieves all invoice data from the local JSON file.

**Response Format:**
```json
{
  "invoices": [
    {
      "id": "inv_001",
      "created_at": "2024-01-15T10:30:00Z",
      "status": "paid",
      "amount": 299.99,
      "plan": "Pro Plan",
      "invoice_url": "https://example.com/invoice/inv_001.pdf"
    }
  ]
}
```

**Response Fields:**
- `id`: Unique invoice identifier  
- `created_at`: Invoice creation timestamp (ISO 8601)  
- `status`: Payment status (`paid`, `pending`, `overdue`)  
- `amount`: Invoice amount in USD  
- `plan`: Subscription plan name  
- `invoice_url`: Download link for invoice PDF  

## 📱 Responsive Design

The application features a dual-layout system:

### Desktop/Tablet View
- Traditional table layout with columns for Date, Status, Amount, Plan, and Action  
- Horizontal scrolling for overflow content  
- Optimized spacing and typography  

### Mobile View
- Card-based layout for better mobile UX  
- Each invoice displayed as an individual card  
- Touch-friendly download buttons  
- Vertical stacking for easy scrolling  

## 🎨 Styling Features

- **Status Indicators**: Color-coded status badges  
  - Green: Paid invoices  
  - Gray: Pending/Unpaid invoices  
- **Responsive Typography**: Scalable text sizes across devices  
- **Interactive Elements**: Hover effects and touch feedback  
- **Clean Borders**: Subtle borders and shadows for visual hierarchy  

## 📄 Data Structure

The local JSON file (`data/invoices.json`) follows this structure:

```json
{
  "invoices": [
    {
      "id": "string",
      "created_at": "ISO 8601 timestamp",
      "status": "paid | pending | overdue",
      "amount": "number",
      "plan": "string",
      "invoice_url": "string (URL)"
    }
  ]
}
```

## 🔄 How It Works

1. **Data Loading**: The API endpoint (`/api/invoice.ts`) reads data from the local JSON file  
2. **Server-Side Processing**: Next.js API route handles the data retrieval and formatting  
3. **Client-Side Rendering**: React components fetch data and render the responsive table  
4. **Responsive Behavior**: Tailwind CSS classes handle the responsive layout switching  

## 📝 Key Components

### InvoiceTable Component
- Handles data fetching from the API  
- Manages responsive layout switching  
- Formats dates and currency values  
- Provides download functionality  

### API Route Handler
- Reads invoice data from local JSON file  
- Handles error cases and data validation  
- Returns formatted JSON response  
- Supports future database integration  

## 🚀 Future Enhancements

- **Database Integration**: Replace JSON file with proper database  
- **Invoice Creation**: Add functionality to create new invoices  
- **Search & Filter**: Implement invoice filtering and search  
- **Export Options**: Add bulk export functionality  
- **User Authentication**: Add user login and permissions  
- **Real-time Updates**: WebSocket integration for live updates  

## 📋 Requirements

- Node.js 14.0 or higher  
- npm 6.0 or higher (or yarn equivalent)  
- Modern web browser with JavaScript enabled  

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request  

---
