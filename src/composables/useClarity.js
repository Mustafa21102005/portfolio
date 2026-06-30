// useClarity.js
// Handles the loading of Microsoft Clarity script and passing consent signals.
// Clarity is NEVER loaded until the user has made a choice (accept or decline).
// Default state, per Clarity's docs, is "denied" until the user say otherwise.

const CLARITY_PROJECT_ID = 'x4ekuyn1dw'
const STORAGE_KEY = 'clarity-consent'

let clarityLoaded = false

/**
 * Injects the Clarity tracking script into the page.
 * Safe to call multiple times — it only injects once.
 */
function loadClarityScript() {
  if (clarityLoaded || typeof window === 'undefined') return
  clarityLoaded = true
  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = 'https://www.clarity.ms/tag/' + i
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID)
}

/**
 * Sends the consent signal to Clarity using the Consent API v2.
 * Must be called every time consent is granted or denied — including on
 * every page load if consent was already given previously.
 */
function sendConsentSignal(granted) {
  if (typeof window === 'undefined' || typeof window.clarity !== 'function') return

  window.clarity('consentv2', {
    ad_storage: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  })
}

/**
 * Reads any previously stored consent choice.
 * Returns "granted", "denied", or null if the user hasn't decided yet.
 */
export function getStoredConsent() {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(STORAGE_KEY)
}

/**
 * Call this once when your app boots (e.g. in App.vue's onMounted).
 * If the user already made a choice before, this re-applies it
 * (loading Clarity + sending the signal). If they haven't decided yet,
 * it does nothing — the banner component will handle that.
 */
export function initClarityFromStoredConsent() {
  const stored = getStoredConsent()
  if (stored === 'granted' || stored === 'denied') {
    loadClarityScript()
    sendConsentSignal(stored === 'granted')
  }
}

/**
 * Call this when the user clicks Accept.
 */
export function grantClarityConsent() {
  window.localStorage.setItem(STORAGE_KEY, 'granted')
  loadClarityScript()
  sendConsentSignal(true)
}

/**
 * Call this when the user clicks Decline.
 * Clarity will still load in a privacy-safe "no-consent" mode
 * (no cookies, per-pageview anonymous IDs) per Clarity's own behavior,
 * but no cookies are set and no session linking happens.
 */
export function denyClarityConsent() {
  window.localStorage.setItem(STORAGE_KEY, 'denied')
  loadClarityScript()
  sendConsentSignal(false)
}

/**
 * Call this to let the user revoke a previously granted consent
 * (e.g. from a "Cookie settings" link in your footer).
 */
export function resetClarityConsent() {
  window.localStorage.removeItem(STORAGE_KEY)
}
