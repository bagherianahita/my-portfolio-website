import { describe, expect, it } from 'vitest';
import {
  isLinkedInProfileUrl,
  isValidEmail,
  isValidHttpUrl,
  linkedInHandle,
} from './validation';
import { LINKEDIN_URL } from '../constants/contactData';

describe('isValidHttpUrl', () => {
  it('accepts a well-formed https URL', () => {
    expect(isValidHttpUrl('https://example.com/path')).toBe(true);
  });

  it('accepts a well-formed http URL', () => {
    expect(isValidHttpUrl('http://localhost:5173')).toBe(true);
  });

  it('rejects an empty string', () => {
    expect(isValidHttpUrl('')).toBe(false);
  });

  it('rejects whitespace-only input', () => {
    expect(isValidHttpUrl('   ')).toBe(false);
  });

  it('rejects non-string values', () => {
    expect(isValidHttpUrl(null)).toBe(false);
    expect(isValidHttpUrl(undefined)).toBe(false);
    expect(isValidHttpUrl(42)).toBe(false);
  });

  it('rejects malformed URLs', () => {
    expect(isValidHttpUrl('not-a-url')).toBe(false);
  });

  it('rejects non-http protocols', () => {
    expect(isValidHttpUrl('ftp://files.example.com')).toBe(false);
    expect(isValidHttpUrl('mailto:test@example.com')).toBe(false);
  });
});

describe('isValidEmail', () => {
  it('accepts a standard email address', () => {
    expect(isValidEmail('abagherikalh@mun.ca')).toBe(true);
  });

  it('rejects an empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('rejects addresses with spaces', () => {
    expect(isValidEmail('user @example.com')).toBe(false);
  });

  it('rejects addresses missing the domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('rejects non-string input', () => {
    expect(isValidEmail(undefined)).toBe(false);
  });

  it('rejects addresses longer than 254 characters', () => {
    const longLocal = 'a'.repeat(250);
    expect(isValidEmail(`${longLocal}@x.com`)).toBe(false);
  });
});

describe('isLinkedInProfileUrl', () => {
  it('accepts the canonical portfolio LinkedIn URL', () => {
    expect(isLinkedInProfileUrl(LINKEDIN_URL)).toBe(true);
  });

  it('accepts www.linkedin.com variant', () => {
    expect(isLinkedInProfileUrl('https://www.linkedin.com/in/anadevpmp/')).toBe(true);
  });

  it('rejects the old profile handle', () => {
    expect(isLinkedInProfileUrl('https://www.linkedin.com/in/anahita-bagheri-developer')).toBe(
      true,
    );
    expect(
      isLinkedInProfileUrl('https://www.linkedin.com/in/anahita-bagheri-developer-pmp'),
    ).toBe(true);
  });

  it('rejects http (non-https) LinkedIn URLs', () => {
    expect(isLinkedInProfileUrl('http://linkedin.com/in/anadevpmp')).toBe(false);
  });

  it('rejects company pages', () => {
    expect(isLinkedInProfileUrl('https://linkedin.com/company/example')).toBe(false);
  });

  it('rejects unrelated domains', () => {
    expect(isLinkedInProfileUrl('https://github.com/bagherianahita')).toBe(false);
  });
});

describe('linkedInHandle', () => {
  it('extracts anadevpmp from the portfolio URL', () => {
    expect(linkedInHandle(LINKEDIN_URL)).toBe('anadevpmp');
  });

  it('returns null for invalid URLs', () => {
    expect(linkedInHandle('https://example.com')).toBe(null);
  });

  it('returns null for non-string input', () => {
    expect(linkedInHandle(123)).toBe(null);
  });
});
