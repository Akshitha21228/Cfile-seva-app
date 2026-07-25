import { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center overflow-y-auto">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 shrink-0">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <p className="text-white/60 mb-8 max-w-md">
            We've encountered an unexpected error. Please try refreshing the page or returning home.
          </p>
          
          <div className="flex flex-col w-full gap-3 max-w-xs shrink-0">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold transition-all active:scale-95"
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Page
            </button>
            
            <button
              onClick={this.handleReset}
              className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all active:scale-95"
            >
              <Home className="w-5 h-5" />
              Return Home
            </button>
          </div>

          {!import.meta.env.PROD && this.state.error && (
            <div className="mt-12 p-4 bg-white/5 rounded-xl text-left w-full max-w-2xl overflow-auto border border-white/5 shrink-0">
              <p className="text-red-400 font-mono text-xs mb-2">{this.state.error.toString()}</p>
              <pre className="text-[10px] text-white/40 font-mono whitespace-pre-wrap">
                {this.state.error.stack}
              </pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
