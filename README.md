<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Mundo Slot | Casino Online Argentina

Aplicación web moderna de casino online con integración de IA para predicciones de suerte.

## 🚀 Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel.

### Pasos para desplegar:

1. **Ve a [Vercel](https://vercel.com)** e inicia sesión con tu cuenta de GitHub
2. **Importa el repositorio:**
   - Haz clic en "Add New Project"
   - Selecciona el repositorio: `mjsis20052/slot2`
   - Vercel detectará automáticamente que es un proyecto Vite
3. **Configura las variables de entorno:**
   - En la sección "Environment Variables", agrega:
     - **Variable:** `GEMINI_API_KEY`
     - **Value:** Tu API key de Gemini (obtén una en: https://aistudio.google.com/apikey)
4. **Despliega:**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará tu aplicación automáticamente

### Configuración automática

El archivo `vercel.json` ya está configurado con:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Rewrites para SPA (Single Page Application)

## 💻 Ejecutar Localmente

**Prerrequisitos:** Node.js instalado

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Crea un archivo `.env.local` y agrega tu API key:
   ```
   GEMINI_API_KEY=tu_api_key_aqui
   ```

3. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en: `http://localhost:3000`

## 📦 Tecnologías

- React 19
- TypeScript
- Vite
- Google Gemini AI
- Tailwind CSS
- Lucide React Icons
