/**
 * Lightweight, dependency-free validators used across the site and exercised
 * heavily by the test-suite for edge cases.
 */

/** Returns true only for syntactically valid http(s) URLs. */
export function isValidHttpUrl(value: unknown): boolean {
  if (typeof value !== 'string' || value.trim() === '') return false;
  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

/** Conservative email check — good enough for surfacing obviously bad data. */
export function isValidEmail(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  if (/\s/.test(trimmed)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

/** True when the value is an https LinkedIn profile URL (`/in/<handle>`). */
export function isLinkedInProfileUrl(value: unknown): boolean {
  if (!isValidHttpUrl(value)) return false;
  const url = new URL((value as string).trim());
  if (url.protocol !== 'https:') return false;
  const host = url.hostname.toLowerCase().replace(/^www\./, '');
  if (host !== 'linkedin.com') return false;
  return /^\/in\/[^/]+\/?$/.test(url.pathname);
}

/** Extracts the handle from a LinkedIn profile URL, or null when invalid. */
export function linkedInHandle(value: unknown): string | null {
  if (!isLinkedInProfileUrl(value)) return null;
  const url = new URL((value as string).trim());
  const match = url.pathname.match(/^\/in\/([^/]+)\/?$/);
  return match ? match[1] : null;
}
