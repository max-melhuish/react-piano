import { OctaveIndex, PitchIndex } from "./note"
export type Key = string
export type Keys = Key[]

export const TOP_ROW: Keys = Array.from("q2w3er5t6y7u")
export const BOTTOM_ROW: Keys = Array.from("zsxdcvgbhnjm")
export const CHANGE_ROW_AT: OctaveIndex = 5

export function selectKey(octaveIndex: OctaveIndex, pitchIndex: PitchIndex) {
    const keysRow = octaveIndex < CHANGE_ROW_AT  ? TOP_ROW : BOTTOM_ROW
    return keysRow[pitchIndex]
}