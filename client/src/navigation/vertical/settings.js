// ** Icons Import
import { Circle, User, Shield, Settings } from 'react-feather'

export default [
    {
        id: 'settings',
        title: 'Settings',
        icon: <Settings size={20} />,
        children: [
            {
                id: 'roles-permissions',
                title: 'Roles & Permissions',
                icon: <Shield size={20} />,
                children: [
                    {
                        id: 'roles',
                        title: 'Roles',
                        icon: <Circle size={12} />,
                        navLink: '/apps/roles'
                    },
                    {
                        id: 'permissions',
                        title: 'Permissions',
                        icon: <Circle size={12} />,
                        navLink: '/apps/permissions'
                    }
                ]
            },

            {
                id: 'users',
                title: 'User',
                icon: <User size={20} />,
                children: [
                    {
                        id: 'list',
                        title: 'List',
                        icon: <Circle size={12} />,
                        navLink: '/apps/user/list'
                    },
                    {
                        id: 'view',
                        title: 'View',
                        icon: <Circle size={12} />,
                        navLink: '/apps/user/view'
                    }
                ]
            }
        ]
    }
]
