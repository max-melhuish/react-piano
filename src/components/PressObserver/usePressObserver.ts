import { useEffect, useState } from "react"
import { Key as KeyLabel } from "../../domain/keyboard"

type isPressed = boolean
type EventCode = string
type CallbackFunction = () => void

type Settings = {
    watchKey: KeyLabel
    onStartPress: CallbackFunction
    onFinishPress: CallbackFunction
}

function fromEventCode(code: EventCode): KeyLabel {
    const prefixRegex = /Key|Digit/gi
    return code.replace(prefixRegex, '')
}

function equal(watchKey: KeyLabel, eventCode: EventCode): boolean {
    return (fromEventCode(eventCode).toUpperCase() === watchKey.toUpperCase())
}

export function usePressObserver({
    watchKey,
    onStartPress,
    onFinishPress
}: Settings): isPressed {
    const [pressed, setPressed] = useState(false)

    useEffect(() => {
        function handlePressStart({ code }: KeyboardEvent): void {
            if (pressed || !equal(watchKey, code)) return
            setPressed(true)
            onStartPress()
        } 

        function handlePressFinish({code}: KeyboardEvent): void {
            if (!pressed || !equal(watchKey, code)) return
            setPressed(false)
            onFinishPress()
        }

        document.addEventListener('keydown', handlePressStart)
        document.addEventListener('keyup', handlePressFinish)

        return () => {
            document.removeEventListener('keydown', handlePressStart)
            document.removeEventListener('keyup', handlePressFinish)
        }

    }, [watchKey, pressed, setPressed, onStartPress, onFinishPress])

    return pressed
}