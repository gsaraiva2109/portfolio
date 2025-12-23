# Cyber Terminal Portfolio

Ultra-modern portfolio website for DevOps/Cloud Engineers featuring an advanced cyber terminal aesthetic, built for high-performance homelab deployment.

## 🌟 Live Demo

**[View Live Website →](https://gsaraiva.com.br)**

## ✨ Features

### 🎯 **Core Portfolio**

- **Cyber Terminal Design**: Electric neon green theme with monospace fonts
- **Advanced Animations**: Typewriter effects, glitch transitions, 3D grid background
- **Responsive Design**: Perfect across desktop, tablet, and mobile
- **Interactive Elements**: Terminal commands, skill explorer, project filtering
- **Professional Content**: Complete showcase of DevOps and cloud engineering skills

### 🎨 **Visual Components**

- **Animated Background**: Dynamic 3D grid with terminal styling
- **Progress Indicators**: Visual skill and technology proficiency displays
- **Interactive Cards**: Hover effects and smooth transitions
- **Terminal Commands**: Authentic command-line interface elements
- **Real-time Statistics**: Dynamic counters and engagement metrics

## 🛠 Tech Stack

### **Frontend**

- **React 18** + **TypeScript** for type-safe development
- **Vite** for lightning-fast builds and development
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and transitions
- **React Router** for client-side routing

### **Visual & UI**

- **Lucide React** for consistent iconography
- **Three.js** for 3D background effects
- **Custom Terminal Components** for authentic cyber aesthetic
- **Responsive Grid Systems** for mobile-first design

### **Infrastructure**

- **Docker** for containerization
- **Nginx** for high-performance static serving
- **Dokploy** for self-hosted PaaS deployment

## 📦 Local Development

```bash
# Clone the repository
git clone https://github.com/gsaraiva2109/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment (Dokploy / Homelab)

This project includes a production-ready `Dockerfile` optimized for Nginx.

### **Option 1: Dokploy Automated Deployment**

1.  **Create Service**: In your Dokploy dashboard, create a new "Application".
2.  **Source**: Connect your GitHub repository.
3.  **Build Type**: Select **Docker**.
4.  **Environment Variables**:
    - `VITE_WEB3FORMS_ACCESS_KEY` (Required for contact form)
5.  **Deploy**: Dokploy will automatically build the image and deploy the container.

### **Option 2: Docker Compose / Manual**

Building and running locally with Docker:

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -d -p 80:80 --name portfolio portfolio
```

## 🎨 Customization Guide

### **Personal Information**

Update content in component files:

- **Main Portfolio**: `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Skills & Projects**: Update directly in component files
- **Key Data**: `src/data/portfolio.ts`

### **Content Updates**

1. **Skills**: Modify technology lists and proficiency levels in `src/data/portfolio.ts`
2. **Contact Info**: Update social links and contact details in `src/data/portfolio.ts`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── visual/
│   │   │   └── VisualComponents.tsx    # Reusable UI components
│   │   ├── Navbar.tsx                  # Navigation component
│   │   ├── Footer.tsx                  # Footer with links
│   │   └── ...
│   ├── pages/                          # Page components
│   ├── data/                           # Portfolio data (Skills, Projects, Contact)
│   ├── App.tsx                         # Main application
│   └── main.tsx                        # Entry point
├── public/                             # Static assets
├── package.json                        # Dependencies
├── Dockerfile                          # Production Docker configuration
├── tailwind.config.js                  # Tailwind configuration
└── vite.config.ts                      # Vite configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 About

This portfolio showcases DevOps and Cloud Engineering expertise with modern web technologies. Built with a focus on performance, accessibility, and user experience.

## 🔗 Links

- **Live Website**: [https://gsaraiva.com.br](https://gsaraiva.com.br)
- **GitHub Repository**: [https://github.com/gsaraiva2109/portfolio](https://github.com/gsaraiva2109/portfolio)
- **Personal GitHub**: [https://github.com/gsaraiva2109](https://github.com/gsaraiva2109)

---

_Built with ❤️ using React, TypeScript, and modern web technologies_
