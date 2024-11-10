import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import HomePage from '../pages/HomePage'
// import AdminPage from '../pages/AdminPage'
// import UserDetails from '../pages/UserDetails'
// import EditUserAdmin from '../pages/EditUserAdmin'
// import EditUserSelf from '../pages/EditUserSelf'
// import HelperProfilePage from '../pages/HelperUI/HelperProfilePage'
// import PolicyUploaderPage from '../pages/HelperUI/PolicyUploaderPage'
// import AffectedProfilePage from '../pages/AffectedUI/AffectedProfilePage'
// import SelectBrokerPage from '../pages/HelperUI/SelectBrokerPage'
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import PickRolePage from '@/pages/PickRolePage'
import AffectedDashboardPage from '@/pages/AffectedUI/AffectedDashboardPage'
import HelperDashboardPage from '@/pages/HelperUI/HelperDashboardPage'

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<h1>Contact 🚧</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pick-role" element={<PickRolePage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'AFFECTED', 'HELPER']} />}>

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'AFFECTED']} />}>
                <Route path="/affected-dashboard" element={<AffectedDashboardPage />} />
                {/* <Route path="/broker-profile" element={<BrokerProfilePage />} /> */}
                {/* <Route path="/upload-policy" element={<PolicyUploaderPage />} /> */}
            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'HELPER']} />}>
                <Route path="/helper-dashboard" element={<HelperDashboardPage />} />

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN']} />}>
                {/* <Route path="/admin-page" element={<AdminPage />} /> */}
                {/* <Route path="/users/:id" element={<UserDetails />} /> */}
                {/* <Route path="/users/edit/:id" element={<EditUserAdmin />} /> */}
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )

}

export default AppRoutes