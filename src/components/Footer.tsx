import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from "./Footer.module.css"

const EinStackLogo = () => {
    return (
        <div className={styles.companyLogo}>
            <img
                src={"/images/logo/einstack.png"}
                alt="EinStack Logo"
            />
        </div>
    )
}

export const Footer = () => {
    return (
        <div className={styles.content}>
            <div className={styles.sections}>
                <div className={styles.company}>
                    <EinStackLogo/>
                    <span>Reliable infrastructure <br/> for GenAI revolution</span>
                </div>
                <div>
                    Links
                </div>
                <div className={styles.socials}>
                    <FontAwesomeIcon className={styles.social} icon={faGithub}/>
                    <FontAwesomeIcon className={styles.social} icon={faDiscord}/>
                    <FontAwesomeIcon className={styles.social} icon={faLinkedin}/>
                    <div>
                        <a href="https://www.netlify.com">
                            {/*<img src="https://www.netlify.com/v3/img/components/netlify-light.svg" alt="Deploys by Netlify"/>*/}
                            <img src="https://www.netlify.com/v3/img/components/netlify-dark.svg"
                                 alt="Deploys by Netlify"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                © 2023–Present, EinStack Community. <br/> Documentation distributed under <a href="">CC-BY-4.0</a>.
            </div>
        </div>
    )
}
