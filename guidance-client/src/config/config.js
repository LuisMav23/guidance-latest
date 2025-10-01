function resolveApiBase() {
    // If an explicit env override is provided at build time, use it.
    if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');

    // If running in the browser, build the API url using the current host so
    // requests from the user's browser go to the host that is reachable (usually localhost).
    if (typeof window !== 'undefined') {
        const proto = window.location.protocol;
        const host = window.location.hostname;
        // Assume server listens on port 5000 on the same host where the client is accessed.
        return `${proto}//${host}:5000`;
    }

    // Fallback for server-side execution (inside Docker containers) where service name may resolve.
    return 'http://server:5000';
}

const CONFIG = {
    API_BASE_URL: resolveApiBase(),
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}

export default CONFIG;
