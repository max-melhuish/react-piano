import clsx from "clsx"
import { FunctionComponent } from "react"
import { NoteType } from "../../domain/note"
import styles from "./Key.module.css"

type PressCallback = () => void

type KeyProps = {
    type: NoteType
    label: string
    disabled?: boolean
    onUp: PressCallback
    onDown: PressCallback
}

export const Key: FunctionComponent<KeyProps> = (props: KeyProps) => {
    const { type, label, onDown, onUp, ...rest } = props

    return (
        <button
            className={clsx(styles.key, styles[type])}
            type="button"
            onMouseDown={onDown}
            onMouseUp={onUp}
            {...rest}>
            {label}
        </button>
    )
}