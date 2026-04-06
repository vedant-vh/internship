# Document Template & Report Generation Portal

A powerful Node.js application designed to process complex Microsoft Word (DOCX) templates. It specializes in dynamic table generation, formatting preservation, and automated data mapping using a robust XML normalization engine.

## 🚀 Key Features

- **Decisive XML Normalization**: An intelligent engine that bridges fragmented tags (e.g., `{%tr for ... %}`) that Microsoft Word often splits across multiple runs.
- **Dynamic Table Generation**: Supports nested table loops and complex row-level data injection.
- **Formatting Preservation**: Maintains your template's layout, tabs, line breaks, colors, and fonts during processing.
- **Report Subsystem**: Built-in support for generating detailed reports with image uploads and custom logic.
- **Secure Downloads**: Dedicated backend routes for reliable file delivery, bypassing browser security blocks.
- **History & Preview**: Track generated documents and preview them directly in the browser using HTML conversion.

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite (via Prisma ORM)
- **Document Engine**: Docxtemplater, PizZip
- **Preview Engine**: Mammoth.js (DOCX to HTML)
- **UI**: EJS Templates, Bootstrap 5

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd document-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Generate a custom `SECRET_KEY` in your `.env` for production security.

4. **Database Initialization**:
   ```bash
   npx prisma migrate dev --name init
   npx node scripts/seed_users.js
   ```

## 🏃 Running the Application

### Development Mode (with hot-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 🔒 Production Considerations

When deploying to a production server:
- Generate a unique `SECRET_KEY`.
- Ensure the `media/` directory is writable by the Node.js process.
- Run `npx prisma migrate deploy` to safely apply database schema changes.

## 📄 License
MIT License - See the [LICENSE](LICENSE) file for details.
