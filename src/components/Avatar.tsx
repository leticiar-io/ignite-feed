import styles from "./Avatar.module.css"

export function Avatar(props: { src : string, hasBorder: boolean}) {
    const hasBorder = props.hasBorder !== false;

    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={`${props.src}`} />
    )
}