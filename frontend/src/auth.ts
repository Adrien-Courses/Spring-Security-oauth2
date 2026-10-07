export const login = () => {
  // A full page navigation, not a fetch: the browser must follow the redirects to GitHub
  window.location.href = '/oauth2/authorization/github'
}
