export const placeholderTextLightTheme = "placeholder-text-light-gray text-xs pl-4"
export const placeholderTextDarkTheme = "placeholder-white text-xs pl-4"

const userFields = [

    {
        label: 'email',
        htmlFor: "email",
        placeholder: 'email_placeholder',
        type: "email",
        autoComplete: "username",
        id: "email",
        placeholderIconLight: `${placeholderTextLightTheme} bg-email-input-light`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-email-input-dark`,
    },
    {
        label: 'phone_number',
        htmlFor: 'phone',
        placeholder: 'phone_number',
        type: "tel",
        autoComplete: "phone",
        id: "phone",
        placeholderIconLight: `${placeholderTextLightTheme} bg-phone-input-light`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-phone-input-dark`,
    },
    {
        label: 'first_name',
        htmlFor: 'firstName',
        placeholder: 'first_name',
        type: "text",
        autoComplete: "given-name",
        id: "firstName",
        placeholderIconLight: `${placeholderTextLightTheme} bg-person-input-light`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-person-input-dark`,
    },
    {
        label: 'last_name',
        htmlFor: 'lastName',
        placeholder: 'last_name',
        type: "text",
        autoComplete: "family-name",
        id: "lastName",
        placeholderIconLight: `${placeholderTextLightTheme} bg-person-input-light`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-person-input-dark`,
    },
    {
        label: 'password',
        htmlFor: 'password',
        placeholder: 'password_placeholder',
        type: "password",
        autoComplete: "new-password",
        id: "password",
        placeholderIconLight: `${placeholderTextLightTheme}`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-password-input-dark`,
    }
]

export default userFields