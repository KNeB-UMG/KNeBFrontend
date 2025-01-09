import { faCalendarAlt, faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type RouteProps = {
    key: string,
    icon: IconDefinition,
    label: ReactNode,
    tooltip?: string
}

export const routes:RouteProps[] = [
    {
        key: '/',
        icon: faHome,
        label: <Link to="/">Home</Link>,
        tooltip: 'Strona główna'
    },
    {
        key: '/events',
        icon: faCalendarAlt,
        label: <Link to="/events">Events</Link>,
        tooltip: 'Wydarzenia'
    }
];