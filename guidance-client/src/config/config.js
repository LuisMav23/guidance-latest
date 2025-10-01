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

    // Server-side / build-time behavior:
    // If Node is running on Linux, prefer localhost (useful when containers are run with host networking).
    // Otherwise default to Docker service name 'server' which resolves when containers are on the same bridge network.
    try {
        if (process.platform === 'linux') {
            return 'http://localhost:5000';
        }
    } catch (e) {
        // ignore and fall through
    }

    return 'http://server:5000';
}

const CONFIG = {
    API_BASE_URL: resolveApiBase(),
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}

export default CONFIG;
