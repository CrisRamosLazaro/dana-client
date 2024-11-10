export const loginValidationSchema = {
    email: 'email_required',
    password: 'password_required',
}

export const signupValidationSchema = {
    email: 'email_required',
    phone: 'phone_required',
    password: 'password_required',
    confirmPassword: 'password_confirmation_required'
}

export const affectedValidationSchema = {
    govId: 'govId_required'


}

export const validateData = (data, validationSchema) => {

    const errors = {}

    if (data.role && data.role === 'AFFECTED') {
        if (!data.firstName) {
            errors.firstName = 'this_field_is_required'
        }
        if (!data.lastName) {
            errors.lastName = 'this_field_is_required'
        }
    }

    for (const field in validationSchema) {
        if (!data[field]) {
            errors[field] = validationSchema[field]
        }
    }

    if (data.password && data.password.length < 4) {
        errors.password = 'password_must_be_at_least_4_characters'
    }

    if (data.password && data.confirmPassword &&
        data.password !== data.confirmPassword) {
        errors.confirmPassword = 'passwords_dont_match'
    }

    return errors
}