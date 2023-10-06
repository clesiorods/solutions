"use client"

import { useTheme } from "next-themes";
import { Icon } from '@iconify/react';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <span className="h-6 w-6 text-2xl cursor-pointer" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")} >
            {theme === 'dark' ? <Icon icon="solar:moon-bold" /> : <Icon icon="solar:sun-2-bold" />}
        </span>
    );
}