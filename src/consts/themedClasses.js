const getThemedClasses = (variant, placeholderIconLight = '', placeholderIconDark = '') => {
    return variant === 'light'
        ? `bg-white focus:bg-gray-100 ${placeholderIconLight}`
        : `bg-transparent focus:bg-gray-800 ${placeholderIconDark}`;
};

export default getThemedClasses