function resolveApiBase() {
    // If browser runtime
    if (typeof window !== 'undefined') {
        const proto = window.location.protocol;
        const host = window.location.hostname;

        // If the page is served over HTTPS, use a relative path so browser
        // requests don't trigger mixed-content errors. Your TLS-terminating
        // nginx will proxy /api to the backend.
        if (proto === 'https:') return '';

        // If an explicit runtime env is provided use it
        if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');

        // Default to using same host on port 5000 for local dev
        return `${proto}//${host}:5000`;
    }

    // Server-side / build-time
    if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
    try {
        if (process.platform === 'linux') return 'http://localhost:5000';
    } catch (e) {
        // ignore
    }
    return 'http://server:5000';
}

const CONFIG = {
    API_BASE_URL: resolveApiBase(),
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://lasallecares.com/'
};

export default CONFIG;
