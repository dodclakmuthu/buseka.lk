export class ApiError extends Error {
  status: number;
  data?: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

function getBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
  return (base && base.trim().length > 0 ? base.trim() : 'http://localhost:3001').replace(/\/+$/, '');
}

export function getAdminDashboardUrl(): string {
  const url = import.meta.env.VITE_ADMIN_DASHBOARD_URL as string | undefined;
  return url && url.trim().length > 0 ? url.trim() : 'http://localhost:8080';
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${getBaseUrl()}${path.startsWith('/') ? '' : '/'}${path}`;
  const headers = new Headers(options.headers);
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json');

  const res = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  });

  const text = await res.text();
  const data = text ? (() => {
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  })() : undefined;

  if (!res.ok) {
    const message =
      data && typeof data === 'object' && data !== null && 'message' in data && typeof (data as any).message === 'string'
        ? (data as any).message
        : `Request failed (${res.status})`;
    throw new ApiError(message, res.status, data);
  }

  return data as T;
}
