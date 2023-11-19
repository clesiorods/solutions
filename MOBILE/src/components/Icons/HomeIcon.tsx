import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SecundaryColor } from "../Styles/colors"

interface IconProps {
    color?: string;
    size?: string;
}

export default function HomeIcon(props:IconProps) {
    return (
        <Svg
            width={props.color ? props.color : 32}
            height={props.color ? props.color : 32}
            viewBox="0 0 24 24"
        >
            <Path
                fill={props.color ? props.color : SecundaryColor}
                stroke={props.color ? props.color : SecundaryColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 19v-8.5a1 1 0 00-.4-.8l-7-5.25a1 1 0 00-1.2 0l-7 5.25a1 1 0 00-.4.8V19a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h4a1 1 0 001-1z"
            />
        </Svg>
    )
}


