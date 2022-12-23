import { useEffect } from "react";
import { useSoundfont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";

export function KeyboardWithInstrument() {

    const AudioContext = useAudioContext()!

    const { loading, play, stop, load } = useSoundfont({ AudioContext })

    // Course recommends useMount, I don't see how it's different to useEffect...
    // useMount(() => load())
    useEffect(() => { load() }, [])

    return <Keyboard loading={loading} play={play} stop={stop} />

}