import authService from '@/services/auth.services'

export const getSignupRedirectPath = role => {
    switch (role) {
        case 'AFFECTED':
            return '/affected-dashboard'
        case 'HELPER':
            return '/helper-dashboard'
        default:
            return '/pick-role'
    }
}

export const getLoginRedirectPath = role => {
    switch (role) {
        case 'AFFECTED':
            return '/affected-dashboard'
        case 'HELPER':
            return '/helper-dashboard'
        case 'ADMIN':
            return '/admin-page'
        default:
            return '/pick-role'
    }
}

export const loginAndAuthenticateUser = (loginData, storeToken, authenticateUser, navigate, getRedirectPath, setErrorMessages) => {
    authService
        .login(loginData)
        .then(({ data }) => {
            storeToken(data.authToken)
            localStorage.setItem('role', data.role)
            authenticateUser(() => navigate(getRedirectPath(data.role)))
        })
        .catch(err => {
            if (err.response && err.response.status === 401) {
                const { field, message } = err.response.data
                setErrorMessages({ [field]: message })
                console.error('Login error:', err)
            } else {
                console.error("Error details:", err.response || err)
            }
        })
}