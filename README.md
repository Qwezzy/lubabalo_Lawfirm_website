# Modern Attorney Website

A professional, responsive, and SEO-optimized website for law firms built with React and Tailwind CSS.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive layout
- ⚡ Fast performance with React and Vite
- 🔍 SEO optimized
- 💬 Live chat integration
- 📝 Blog system
- 📅 Online consultation booking
- 📊 Analytics integration
- 🔒 Security features

## Tech Stack

- React 18
- Tailwind CSS
- Vite
- React Router
- Framer Motion
- Headless UI
- Hero Icons
- React Hook Form
- React Map GL
- React Calendly

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd attorney-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_CALENDLY_LINK=your_calendly_link
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── styles/        # Global styles
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
├── context/       # React context providers
├── assets/        # Static assets
└── App.jsx        # Main application component
```

## Customization

1. Update the content in the components to match your law firm's information
2. Modify the color scheme in `tailwind.config.js`
3. Replace the logo and images in the `public` directory
4. Update the practice areas and testimonials in the respective components

## SEO Optimization

The website includes:
- Meta tags for better search engine visibility
- Semantic HTML structure
- Schema markup for legal services
- Optimized images and assets
- Mobile-friendly design

## Security Features

- SSL encryption
- GDPR compliance
- Cookie consent
- Secure form handling
- Protected routes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@lawfirm.com or create an issue in the repository. 