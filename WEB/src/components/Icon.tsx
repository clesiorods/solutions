"use client"

import { Icon as Iconify } from '@iconify/react';

interface IconProps {
    icon: string;
    className?: string;
}

export default function Icon(props:IconProps) {

    return (
        <Iconify className={props.className} icon={props.icon} />
    );
}