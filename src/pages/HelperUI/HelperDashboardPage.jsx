import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import AffectedUsers from '@/components/HelperUI/AffectedUsers'
import NeededItemsCount from '@/components/NeededItemsCount'

const HelperDashboardPage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    return (

        <>
            <div className={`h-full w-full font-inter flex justify-between items-center px-10
                    ${variant === 'dark'
                    ? 'bg-bg-light-gray'
                    : ''}`}>
                <div>
                    <AffectedUsers />
                </div>
                <div>
                    <NeededItemsCount />
                </div>

            </div>
        </>
    )
}

export default HelperDashboardPage