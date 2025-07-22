import api from "./api";

const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export const authService = {
  login,
  logout,
  getToken,
  getRefreshToken,
  isLoggedIn,
  refreshToken,
};

// --------------------------

async function login(credentials) {
  const res = await api.post('/login', credentials)

  const token = res.data.token
  const refreshToken = res.data.refresh_token

  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)

  setAuthHeader(token)
  return res.data
}

function logout() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  setAuthHeader(null)
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

function isLoggedIn() {
  return !!getToken()
}

function setAuthHeader(token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

// OPTIONAL: automatic refresh
async function refreshToken() {
  const refreshToken = getRefreshToken()
  if (!refreshToken) throw new Error('No refresh token')

  const res = await api.post('/refresh', { refresh_token: refreshToken })
  const newToken = res.data.token

  localStorage.setItem(TOKEN_KEY, newToken)
  setAuthHeader(newToken)
  return newToken
}

// Saat pertama kali load app, set auth header jika token ada
const token = getToken()
if (token) {
  setAuthHeader(token)
}

async function fetchUser() {
  const res = await api.get('/user')
  return res.data
}
