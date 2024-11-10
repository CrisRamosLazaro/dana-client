import { placeholderTextLightTheme, placeholderTextDarkTheme } from './userFields'

const affectedFields = [
    {
        label: 'gov_id',
        htmlFor: "govId",
        placeholder: 'gov_id',
        type: "string",
        autoComplete: "off",
        id: "govId",
        placeholderIconLight: `${placeholderTextLightTheme} bg-person-input-light`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-person-input-dark`,
    },
    {
        label: 'needed_items',
        htmlFor: "neededItems",
        id: "neededItems",
        type: "checkbox",
        optionsArr: [
            { label: 'microwave', id: 'microwave', default: false },
            { label: 'fridge', id: 'fridge', default: false },
            { label: 'mattress', id: 'mattress', default: false }
        ],
        component: 'checkbox'
    },
    {
        label: 'video',
        htmlFor: "video",
        placeholder: 'video_placeholder',
        type: "url",
        autoComplete: "url",
        id: "video",
        placeholderIconLight: `${placeholderTextLightTheme} bg-person-input-light`,
        placeholderIconDark: `${placeholderTextDarkTheme} bg-person-input-dark`,
    },
    {
        label: 'utility_bill',
        htmlFor: "utilityBill",
        placeholder: 'utility_bill_placeholder',
        type: "file",
        autoComplete: "off",
        id: "utilityBill",
        placeholderIconLight: `${placeholderTextLightTheme} `,
        placeholderIconDark: `${placeholderTextDarkTheme} `,
        component: "uploader"
    },
];

export default affectedFields