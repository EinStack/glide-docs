import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import {config} from "../../config";

import styles from "./Footer.module.css"

const EinStackLogo = () => {
    return (
        <div className={styles.companyLogo}>
            <img
                className={"dark:hidden"}
                loading="lazy"
                src={"/images/logo/einstack_title_light.png"}
                alt="EinStack Logo"
            />
            <img
                className={"hidden dark:block"}
                loading="lazy"
                src={"/images/logo/einstack_title_dark.png"}
                alt="EinStack Logo"
            />
        </div>
    )
}

const Socials = () => {
    return (
        <div className={styles.socials}>
            <a target="_blank" href={config.company.github} title="View Glide Github">
                <FontAwesomeIcon className={styles.social} icon={faGithub}/>
            </a>
            <a target="_blank" href={config.company.discord} title="Join us in Discord">
                <FontAwesomeIcon className={styles.social} icon={faDiscord}/>
            </a>
            <a target="_blank" href={config.company.linkedIn}
               title="View EinStack LinkedIn">
                <FontAwesomeIcon className={styles.social} icon={faLinkedin}/>
            </a>
            <a target="_blank" href={`mailto:${config.company.email}`} title="Send us an email">
                <FontAwesomeIcon className={styles.social} icon={faEnvelope}/>
            </a>
        </div>
    )
}

const NetlifyBadge = () => {
    return (
        <div className={styles.gridNetlify}>
            <a href="https://www.netlify.com">
                <img
                    className={"dark:hidden"}
                    loading="lazy"
                    src="https://www.netlify.com/v3/img/components/netlify-light.svg"
                    alt="Deploys by Netlify"
                />
                <img
                    className={"hidden dark:block"}
                    loading="lazy"
                    src="https://www.netlify.com/v3/img/components/netlify-dark.svg"
                    alt="Deploys by Netlify"
                />
            </a>
        </div>
    )
}

type Resource = {
    url: string;
    title: string;
    external: boolean;
}

type ResourceColProps = {
    title: string;
    resources: Resource[];
};

const ResourceCol: React.FC<ResourceColProps> = ({title, resources}) => {
    return (
        <div>
            <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">{title}</h3>
            <ul role="list" className="mt-6 space-y-4">
                {resources && resources.map(resource => (
                    <li>
                        <a target={resource.external ? "_parent" : "_blank"} href={resource.url}>
                            <button
                                className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0"> {resource.title} {resource.external ? "↗" : ""}
                            </button>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Footer = () => {
    const projectResources: Resource[] = [
        {
            url: "/glide/github",
            title: "GitHub",
            external: true,
        },
        {
            url: "/glide/producthunt",
            title: "ProductHunt",
            external: true,
        },
        {
            url: "/glide/artifacthub",
            title: "ArtifactHub",
            external: true,
        },
        {
            url: "/glide/dockerhub",
            title: "DockerHub",
            external: true,
        },
    ]

    const resources: Resource[] = [
        {
            url: "/get-started",
            title: "Get Started",
            external: false,
        },
        {
            url: "/glide/releases",
            title: "Releases",
            external: true,
        },
        {
            url: "/glide/roadmap",
            title: "Roadmap",
            external: true,
        },
        {
            url: "/glide/geps",
            title: "GEPs",
            external: true,
        },
        {
            url: "/glide/conduct",
            title: "Code of Conduct",
            external: true,
        },
        {
            url: "/glide/contributing",
            title: "Contributing",
            external: true,
        },
        {
            url: "/glide/examples",
            title: "Examples",
            external: true,
        },
    ]

    const feedbackResources: Resource[] = [
        {
            url: "/discord",
            title: "Join Discord",
            external: true,
        },
        {
            url: "/glide/new-issue",
            title: "Report an issue",
            external: true,
        },
        {
            url: "/glide/new-vuln",
            title: "Report a vulnerability",
            external: true,
        },
    ]

    return (
        <div className={styles.content}>
            <div className={styles.sections}>
                <div className={styles.company}>
                    <a href={config.company.url}>
                        <EinStackLogo/>
                        <span className={styles.companyCredo}>Open reliable infrastructure for GenAI applications</span>
                    </a>
                    <Socials/>
                </div>
                <div className={"grid grid-cols-1 gap-8 mt-16 xl:col-span-2 xl:mt-0"}>
                    <div className={"md:grid md:grid-cols-3 md:gap-8"}>
                        <ResourceCol title={"Project"} resources={projectResources} />
                        <ResourceCol title={"Resources"} resources={resources} />
                        <ResourceCol title={"Feedback"} resources={feedbackResources} />
                    </div>
                </div>
            </div>
            <div className={styles.gridCopyrightContent}>
                <div className={styles.gridCopyright}>
                    <p>© 2023–Present, EinStack Authors.
                        Documentation distributed under
                        <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>.
                    </p>
                </div>
                <NetlifyBadge/>
            </div>
        </div>
    )

}
