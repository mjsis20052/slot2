import React, { Component, ReactNode, ErrorInfo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', backgroundColor: '#120024', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: '2em', marginBottom: '10px', color: '#D900FF' }}>Algo salió mal</h1>
          <p style={{ maxWidth: '600px', marginBottom: '20px', color: '#ccc' }}>La aplicación ha encontrado un error inesperado al cargar.</p>
          <pre style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', color: '#FFD700', overflow: 'auto', maxWidth: '90%', border: '1px solid rgba(255,255,255,0.1)' }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: '30px', padding: '12px 24px', backgroundColor: '#D900FF', border: 'none', borderRadius: '50px', color: 'white', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 0 15px rgba(217,0,255,0.5)' }}
          >
            INTENTAR DE NUEVO
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);