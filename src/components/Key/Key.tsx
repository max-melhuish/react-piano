import clsx from "clsx"
import { FunctionComponent } from "react"
import { NoteType } from "../../domain/note"
import styles from "./Key.module.css"

type KeyProps = {
    type: NoteType
    label: string
    disabled?: boolean
}

export const Key: FunctionComponent<KeyProps> = (props: KeyProps) => {
    const { type, label, ...rest } = props

    return (
        <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
            {label}
        </button>
    )
}