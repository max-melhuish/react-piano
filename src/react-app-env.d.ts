/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext
type SoundfontType = typeof Soundfont

interface Window extends Window {
    webkitAudioContext: AudioContextType
}