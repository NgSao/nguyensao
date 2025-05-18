// Type definitions for YouTube IFrame Player API
interface YT {
    PlayerState: {
        UNSTARTED: number
        ENDED: number
        PLAYING: number
        PAUSED: number
        BUFFERING: number
        CUED: number
    }
    Player: new (
        elementId: string,
        options: {
            height?: string | number
            width?: string | number
            videoId?: string
            playerVars?: {
                autoplay?: number
                controls?: number
                disablekb?: number
                fs?: number
                iv_load_policy?: number
                modestbranding?: number
                rel?: number
                [key: string]: any
            }
            events?: {
                onReady?: (event: { target: YT.Player }) => void
                onStateChange?: (event: { data: number; target: YT.Player }) => void
                onError?: (event: { data: number }) => void
                [key: string]: any
            }
        },
    ) => void
}

interface Player {
    playVideo(): void
    pauseVideo(): void
    stopVideo(): void
    seekTo(seconds: number, allowSeekAhead: boolean): void
    mute(): void
    unMute(): void
    isMuted(): boolean
    setVolume(volume: number): void
    getVolume(): number
    getPlayerState(): number
    getCurrentTime(): number
    getDuration(): number
    destroy(): void
}

declare global {
    interface Window {
        YT: YT
        onYouTubeIframeAPIReady: (() => void) | null
    }
}
