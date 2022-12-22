export type NoteType = "natural" | "flat" | "sharp"
export type NotePitch = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type MidiValue = number
export type PitchIndex = number

export type Note = {
    midi: MidiValue
    type: NoteType
    pitch: NotePitch
    index: PitchIndex
    octave: OctaveIndex
}

const C1_MIDI_NUMBER = 24
const C4_MIDI_NUMBER = 60
const B5_MIDI_NUMBER = 83

export const LOWEST_NOTE = C4_MIDI_NUMBER
export const HIGHEST_NOTE = B5_MIDI_NUMBER
export const SEMITONES_IN_OCTAVE = 12

export const NATURAL_PITCH_INDICES: PitchIndex[] = [0, 2, 4, 5, 7, 9, 11]

export const PITCH_MAP: Record<PitchIndex, NotePitch> = {
    0: "C",
    1: "C",
    2: "D",
    3: "D",
    4: "E",
    5: "F",
    6: "F",
    7: "G",
    8: "G",
    9: "A",
    10: "A",
    11: "B"
}

export function fromMidi(midiValue: MidiValue): Note {
    const indexAboveC1 = midiValue - C1_MIDI_NUMBER
    const octaveIndex = (Math.floor(indexAboveC1 / SEMITONES_IN_OCTAVE) + 1) as OctaveIndex
    const indexOfNoteWithinOctave = indexAboveC1 % SEMITONES_IN_OCTAVE
    const pitch: NotePitch = PITCH_MAP[indexOfNoteWithinOctave]
    const isSharp = !NATURAL_PITCH_INDICES.includes(indexOfNoteWithinOctave)
    const type: NoteType = isSharp ? "sharp" : "natural"

    return { midi: midiValue, type, pitch, index: indexOfNoteWithinOctave, octave: octaveIndex }
}

type NotesGeneratorSettings = {
    fromNote?: MidiValue
    toNote?: MidiValue
}

export function generateNotes({
    fromNote = LOWEST_NOTE,
    toNote = HIGHEST_NOTE
}: NotesGeneratorSettings = {}): Note[] {
    return Array(toNote - fromNote + 1)
        .fill(0)
        .map((_, index: number) => fromMidi(fromNote + index))
}

export const notes = generateNotes()