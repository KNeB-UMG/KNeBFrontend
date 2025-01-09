import { faCalendarAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type RouteProps = {
    key: string,
    icon?: ReactNode,
    label: ReactNode,
}

export const routes:RouteProps[] = [
    {
        key: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        label: <Link to="/">Home</Link>,
    },
    {
        key: '/events',
        icon: <FontAwesomeIcon icon={faCalendarAlt}/>,
        label: <Link to="/events">Events</Link>,
    }
];