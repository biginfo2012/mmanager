// ** Icons Import
import { PieChart, Minimize, BarChart2 } from 'react-feather'
import { GrCertificate } from 'react-icons/gr'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineBusinessCenter } from 'react-icons/md'

export default [
    {
        id: 'business',
        title: 'My Business',
        icon: <MdOutlineBusinessCenter size={20} />,
        children: [
            {
                id: 'retention',
                title: 'Retention',
                icon: <PieChart size={20} />,
                navLink: '/business/retention'
            },
            {
                id: 'birthday',
                title: 'Birthday',
                icon: <FaBirthdayCake size={20} />,
                navLink: '/business/birthday'
            },
            {
                id: 'expired',
                title: 'Expired',
                icon: <Minimize size={20} />,
                navLink: '/business/expired'
            },
            {
                id: 'statistics',
                title: 'Statistics',
                icon: <BarChart2 size={20} />,
                navLink: '/business/statistics'
            },
            {
                id: 'certifications',
                title: 'Certifications',
                icon: <GrCertificate size={20} />,
                navLink: '/business/certifications'
            }
        ]
    }
]
