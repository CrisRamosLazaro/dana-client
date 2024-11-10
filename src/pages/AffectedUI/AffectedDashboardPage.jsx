import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import SelfUserCard from '@/components/AffectedUI/SelfUserCard'

const AffectedDashboardPage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    return (

        <>
            <div className={`h-full w-full font-inter flex justify-center items-center
                    ${variant === 'dark'
                    ? 'bg-bg-light-gray'
                    : ''}`}>
                <SelfUserCard />
            </div>
        </>
    )
}

export default AffectedDashboardPage