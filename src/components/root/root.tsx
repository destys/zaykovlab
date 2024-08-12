import { Outlet } from 'react-router-dom'
import LayoutComponent from '../layout/layout'


const Root = () => {

    return /* isAuthenticated ? */ (
        <LayoutComponent>
            <Outlet />
        </LayoutComponent>
    ) /* : (
        <LoginPage />
    ); */
}

export default Root