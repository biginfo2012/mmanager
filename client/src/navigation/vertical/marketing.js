// ** Icons Import
import { Mail, MessageSquare } from 'react-feather'
import { FaBullhorn } from 'react-icons/fa'

export default [
    {
        id: 'marketing',
        title: 'Marketing',
        icon: <FaBullhorn size={20} />,
        children: [
            {
                id: 'email',
                title: 'Email',
                icon: <Mail size={20} />,
                navLink: '/apps/email'
            },
            {
                id: 'chat',
                title: 'Chat',
                icon: <MessageSquare size={20} />,
                navLink: '/apps/chat'
            }
        ]
    }
]
