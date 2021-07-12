import React from "react";

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // update state so the next render will show the fallback UI.

        return{ hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // you can also log the error to an error reporting service

        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // you can render any custom fallback UI
            return <h1>Something went wrong</h1>
        }
    }
}

export default ErrorBoundary;