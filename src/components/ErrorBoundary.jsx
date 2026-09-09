import React from 'react';

/**
 * ErrorBoundary — catches runtime React render errors and shows a useful message
 * instead of a black screen. Essential for debugging production deployments.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    console.error('[ErrorBoundary] Caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      const { error, info } = this.state;
      return (
        <div style={{
          minHeight: '100vh',
          background: '#0b0b0b',
          color: '#f1f5f9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <div style={{
            background: '#1a1a1a',
            border: '1px solid #f5c518',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '700px',
            width: '100%',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
            <h1 style={{ color: '#f5c518', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Baty Services — App Error
            </h1>
            <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>
              Something went wrong loading the page. Please call us directly at{' '}
              <a href="tel:4092184240" style={{ color: '#f5c518' }}>409-218-4240</a>{' '}
              or email{' '}
              <a href="mailto:batyservices@gmail.com" style={{ color: '#f5c518' }}>
                batyservices@gmail.com
              </a>
            </p>
            {error && (
              <details style={{ textAlign: 'left', marginTop: '1rem' }}>
                <summary style={{ cursor: 'pointer', color: '#f5c518', marginBottom: '0.5rem' }}>
                  Technical Details
                </summary>
                <pre style={{
                  background: '#111',
                  padding: '1rem',
                  borderRadius: '8px',
                  overflowX: 'auto',
                  fontSize: '0.75rem',
                  color: '#f87171',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}>
                  {error.toString()}
                  {'\n\n'}
                  {info?.componentStack}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '1.5rem',
                background: '#f5c518',
                color: '#000',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
