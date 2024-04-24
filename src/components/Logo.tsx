import React from "react";

import styles from "./Logo.module.css"

export function Logo() {
    return (
        <div className={styles.logo}>
            <img
                src={"/images/logo/glide.png"}
                alt="Glide Logo"
            />
            <span>Glide</span>
        </div>
    );
}
