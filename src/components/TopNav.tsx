import {useRouter} from "next/router";
import Link from "next/link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMap, faList} from "@fortawesome/free-solid-svg-icons";

import styles from "./TopNav.module.css";

import glideTopNav from "@pages/glide/_topnav.json";


interface TopNavItem {
    title: string;
    url: string;
    icon: string;
}

interface TopNavMap {
    [key: string]: TopNavItem[];
}

const topNavs: TopNavMap = {
    "glide": glideTopNav,
    // add other project docs here
}

const TopNavIcon = ({icon}) => {
    const iconByNames = {
        "map": faMap,
        "list": faList,
    }

    return (
        <div className={styles.topNavLinkIconContent}>
            <FontAwesomeIcon className={styles.topNavLinkIcon} icon={iconByNames[icon]} />
        </div>
    )
}

const TopNav = ({path}) => {
    const projectId = Object.keys(topNavs).find(projectId => path.startsWith(`/${projectId}`))

    if (projectId === undefined) {
        return <span>{`TopNav is not for ${path}. Set that up via _topnav.json file`}</span>
    }

    const topNavLinks = topNavs[projectId];

    return (
        <div className="nx-mx-2 hidden md:block">
            {topNavLinks.map(navLink => (
                <Link
                    href={navLink.url}
                    key={navLink.url}
                    className={styles.topNavLink}
                >
                    <TopNavIcon icon={navLink.icon} />
                    {navLink.title}
                </Link>
            ))}
        </div>
    )
}

export const titleRenderer = ({ type, title, route }) => {
    const { asPath } = useRouter();

    if (type === "separator" && title === "TopNav") {
        return (
            <TopNav path={asPath} />
        )
    }

    return title;
}
