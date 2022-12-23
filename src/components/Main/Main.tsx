import { useAudioContext } from "../AudioContextProvider"
import { KeyboardWithInstrument } from "../Keyboard"
import { NoAudioMessage } from "../NoAudioMessage"

export function Main() {
    const AudioContext = useAudioContext()
    return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />
}