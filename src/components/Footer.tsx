import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

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
            <a target="_blank" href={"https://github.com/EinStack/glide"} title="View Glide Github">
                <FontAwesomeIcon className={styles.social} icon={faGithub}/>
            </a>
            <a target="_blank" href={"https://discord.gg/K2CqmBhk4Z"} title="Join us in Discord">
                <FontAwesomeIcon className={styles.social} icon={faDiscord}/>
            </a>
            <a target="_blank" href={"https://www.linkedin.com/company/einstack/"}
               title="View EinStack LinkedIn">
                <FontAwesomeIcon className={styles.social} icon={faLinkedin}/>
            </a>
            <a target="_blank" href={"mailto:contact@einstack.ai"} title="Send us an email">
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

export const Footer = () => {
    return (
        <div className={styles.content}>
            <div className={styles.sections}>
                <div className={styles.company}>
                    <a href={"https://www.einstack.ai/"}>
                        <EinStackLogo/>
                        <span className={styles.companyCredo}>Open reliable infrastructure for GenAI applications</span>
                    </a>
                    <Socials/>
                </div>
                <div className={"grid grid-cols-1 gap-8 mt-16 xl:col-span-2 xl:mt-0"}>
                    <div className={"md:grid md:grid-cols-3 md:gap-8"}>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Company</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a target="_parent" href="/pricing">
                                        <button
                                            className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">
                                            GitHub
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a target="_parent" href="https://docs.vocode.dev">
                                        <button
                                            className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">
                                            ArtifactHub
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a target="_parent" href="https://docs.vocode.dev">
                                        <button
                                            className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">
                                            DockerHub
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Resources</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li><a target="_parent" href="/pricing">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Get
                                        Started
                                    </button>
                                </a></li>
                                <li><a target="_parent" href="https://docs.vocode.dev">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Releases
                                    </button>
                                </a></li>
                                <li><a target="_parent" href="https://docs.vocode.dev">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Roadmap
                                    </button>
                                </a></li>
                                <li><a target="_parent" href="https://docs.vocode.dev">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">GEPs
                                    </button>
                                </a></li>
                                <li><a target="_parent" href="https://docs.vocode.dev">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Code
                                        of Conduct
                                    </button>
                                </a></li>
                                <li><a target="_parent" href="https://docs.vocode.dev">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Contributing
                                    </button>
                                </a></li>
                                <li><a target="_parent" href="https://docs.vocode.dev">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Examples
                                    </button>
                                </a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Feedback</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a target="_parent" href="https://docs.vocode.dev">
                                        <button
                                            className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">
                                            Join Discord
                                        </button>
                                    </a>
                                </li>
                                <li><a target="_parent" href="/pricing">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Report
                                        an issue
                                    </button>
                                </a></li>
                                <li><a target="_parent"
                                       href="https://github.com/EinStack/glide/discussions/categories/general">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Ask
                                        a question
                                    </button>
                                </a></li>
                                <li><a target="_parent"
                                       href="https://github.com/EinStack/glide/discussions/categories/general">
                                    <button
                                        className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-7 text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 !p-0">Report
                                        a vulnerability
                                    </button>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gridCopyrightContent}>
                <div className={styles.gridCopyright}>
                    <p>© 2023–Present, EinStack Authors.
                        Documentation distributed under <a target="_blank"
                                                           href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>.
                    </p>
                </div>
                <NetlifyBadge/>
            </div>
        </div>
    )

}
