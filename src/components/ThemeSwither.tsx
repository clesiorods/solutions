"use client"

import { useTheme } from "next-themes";
import { Icon } from '@iconify/react';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <button className="h-6 w-6 text-xl" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")} >
            {theme === 'dark' ? <Icon icon="solar:moon-bold" /> : <Icon icon="tabler:sun-filled" />}
        </button>
    );
}