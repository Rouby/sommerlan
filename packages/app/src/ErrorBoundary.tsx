import * as React from 'react';

interface ErrorBoundaryProps {
  name: string;
  noLog?: boolean;
  fallback?: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });

    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h1>An unexpected error occured.</h1>;
    }
    return this.props.children;
  }
}
