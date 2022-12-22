import { selectKey } from "../../domain/keyboard"
import { Note, notes } from "../../domain/note"
import { Key } from "../Key"
import styles from "./Keyboard.module.css"

export function Keyboard() {
    return (
        <div className={styles.keyboard}>
            {
                notes.map(({ midi, type, index, octave }: Note) => {
                    const label = selectKey(octave, index)
                    return <Key key={midi} type={type} label={label} />
                })
            }
        </div>
    )
}