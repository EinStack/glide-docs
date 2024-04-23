import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faWandMagicSparkles, faScaleBalanced, faBolt, faPuzzlePiece, faPlug, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

type Props = {
    children?: React.ReactNode
    title: string
    icon: React.ReactNode
    arrow?: boolean
    href: string
}

const allowedIcons = {
    "wand-magic-sparkles": faWandMagicSparkles,
    "scale-balanced": faScaleBalanced,
    "bolt": faBolt,
    "puzzle-piece": faPuzzlePiece,
    "plug": faPlug,
    "people-group": faPeopleGroup,
}

export const Card = ({ title, children, footer, icon}) => {
    return (
        <div className="nx-border nx-rounded-lg nx-border-gray-200 nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900 p-5">
            {icon && <div className={"h-6 w-6"}><FontAwesomeIcon className={"h-6 w-6 nx-text-primary dark:nx-text-primary-light"} icon={allowedIcons[icon]}/></div>}
            {title && <div className="font-bold text-xl mb-2 mt-2">{title}</div>}
            <div>{children}</div>
            {footer && <div className="mt-4">{footer}</div>}
        </div>
    )
}

export const Cards = ({children, columns = 1}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-x-2 gap-5 not-prose nx-mt-6`}>
            {...children}
        </div>
    )
}
