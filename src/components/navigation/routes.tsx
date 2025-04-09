import { faCalendarAlt, faDiagramProject, faHome, faImage, faUserTie, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

export type RouteProps = {
    key: string,
    icon?: IconDefinition,
    label?: ReactNode,
    tooltip?: string
    layout?: string
    navigationDisplay?: boolean 
}

export const routes:RouteProps[] = [
    {
        key: 'home',
        icon: faHome,
        label: <Link to="/">Strona główna</Link>,
        tooltip: 'Strona główna'
    },
    {
        key: 'events',
        icon: faCalendarAlt,
        label: <Link to="/events">Wydarzenia</Link>,
        tooltip: 'Wydarzenia'
    },
    {
        key: 'projects',
        icon: faDiagramProject,
        label: <Link to="/projects">Projekty</Link>,
        tooltip: 'Projekty'
    },
    {
        key: 'posts',
        icon: faImage,
        label: <Link to="/posts">Posty</Link>,
        tooltip: 'Posty'
    },
    {
        key: 'login',
        icon: faUserTie,
        label: <LoginButton/>,
        tooltip: 'Zaloguj się',
        layout: 'no-nav'
    },
    {
        key: 'register',
        layout: 'no-nav',
        navigationDisplay: false
    }
];