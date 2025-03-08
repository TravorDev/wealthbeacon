# WealthBeacon

![WealthBeacon Logo](https://via.placeholder.com/150x50?text=WealthBeacon)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC)](https://tailwindcss.com/)
[![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-Latest-gray)](https://ui.shadcn.com/)

## 📋 Overview

WealthBeacon is an AI-powered wealth management platform designed specifically for the Thai market, focusing on personal financial management, tax optimization, and long-term wealth building. The platform provides a comprehensive dashboard for users to track their finances, optimize their taxes, and plan for their financial future.

### 🌟 Key Features

- **Financial Health Score**: Track your overall financial wellbeing with a comprehensive score
- **Net Worth Tracker**: Monitor your assets and liabilities over time
- **Monthly Cash Flow**: Visualize your income, expenses, and savings
- **Tax Optimization**: Discover tax-saving opportunities specific to Thai regulations
- **Smart Insights**: Receive AI-powered observations about your finances
- **Financial Goals**: Track progress toward your financial objectives
- **Financial Calendar**: Keep track of important financial dates and events

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TravorDev/wealthbeacon.git
cd wealthbeacon
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
wealthbeacon/
├── app/                  # Next.js App Router
│   ├── dashboard/        # Dashboard page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (redirects to dashboard)
├── components/           # React components
│   ├── dashboard/        # Dashboard components
│   │   ├── financial-health-score.tsx
│   │   ├── net-worth-tracker.tsx
│   │   ├── monthly-cash-flow.tsx
│   │   ├── tax-savings.tsx
│   │   ├── smart-insights.tsx
│   │   ├── financial-goals.tsx
│   │   └── financial-calendar.tsx
│   ├── layout/           # Layout components
│   │   ├── dashboard-layout.tsx
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   └── ui/               # ShadCN UI components
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── .github/              # GitHub workflows and templates
│   ├── workflows/        # CI/CD workflows
│   └── ISSUE_TEMPLATE/   # Issue templates
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── jest.config.js        # Jest configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🧪 Testing

We use Jest and React Testing Library for testing. To run tests:

```bash
npm test
# or
yarn test
```

## 🚢 Deployment

The application is set up for continuous deployment with GitHub Actions. When you push to the main branch, the application will be automatically built, tested, and deployed.

### Manual Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## 🧩 Adding New Components

### ShadCN UI Components

You can add more ShadCN components using the CLI:

```bash
npx shadcn@latest add [component-name]
```

Available components can be found in the [ShadCN UI documentation](https://ui.shadcn.com/docs/components).

### Custom Components

When adding new custom components:

1. Create a new file in the appropriate directory
2. Use the existing components as a reference for structure and styling
3. Add proper TypeScript types and documentation
4. Write tests for the component

## 🎨 Customization

### Theming

You can customize the theme by modifying the `globals.css` file and the `components.json` configuration.

### Layout

The layout can be customized by modifying the components in the `components/layout` directory.

## 📚 Documentation

### Component Documentation

Each component is documented with:

- TypeScript interfaces for props
- JSDoc comments for functions
- Usage examples

### API Documentation

API endpoints are documented in the `docs/api.md` file.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [ShadCN UI](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Recharts](https://recharts.org/) - Charting library
- [date-fns](https://date-fns.org/) - Date utility library