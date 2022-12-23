import { selectKey } from "../../domain/keyboard"
import { MidiValue, Note, notes } from "../../domain/note"
import { Key } from "../Key"
import styles from "./Keyboard.module.css"

export type KeyboardProps = {
    loading: boolean
    play: (note: MidiValue) => Promise<void>
    stop: (note: MidiValue) => Promise<void>
}

export function Keyboard({ loading, play, stop }: KeyboardProps) {
    return (
        <div className={styles.keyboard}>
            {
                notes.map(({ midi, type, index, octave }: Note) => {
                    const label = selectKey(octave, index)
                    return <Key
                        key={midi}
                        type={type}
                        label={label}
                        disabled={loading}
                        onDown={() => play(midi)}
                        onUp={() => stop(midi)} />
                })
            }
        </div>
    )
}