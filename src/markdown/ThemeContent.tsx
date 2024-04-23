export const LightOnly = ({children}) => {
    return (
        <div className={"dark:nx-hidden"}>
            {children}
        </div>
    )
}

export const DarkOnly = ({children}) => {
    return (
        <div className={"nx-hidden dark:nx-block"}>
            {children}
        </div>
    )
}
