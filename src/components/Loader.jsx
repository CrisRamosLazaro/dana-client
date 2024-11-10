import { useTranslation } from "react-i18next"

const Loader = () => {

    const { t } = useTranslation()

    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full" >
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
            <span className="visually-hidden">{t("loading")}</span>
        </div>
    )
}

export default Loader