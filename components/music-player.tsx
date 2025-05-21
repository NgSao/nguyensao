
"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX, Music, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

declare global {
    interface Window {
        YT: any
        onYouTubeIframeAPIReady: () => void
    }
}

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(30)
    const [isMinimized, setIsMinimized] = useState(false)
    const playerRef = useRef<YT.Player | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const playlist = [
        { id: "j6qE-TCigkE", title: "Thu Cuối, Hẹn Một Mai..." },
        { id: "t0glDqwyEHA", title: "Sau Lời Từ Khước, Có Chàng Trai Viết..." },
        { id: "kUY1vDi28Ms", title: "Lâm Chấn Khang" }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isShuffling, setIsShuffling] = useState(false)
    const [isRepeating, setIsRepeating] = useState(false)

    const loadAndPlayVideo = (index: number) => {
        const videoId = playlist[index].id
        if (playerRef.current && videoId) {
            playerRef.current.loadVideoById(videoId)
            setIsPlaying(true)
        }
    }

    const playNext = () => {
        if (isShuffling) {
            let randomIndex
            do {
                randomIndex = Math.floor(Math.random() * playlist.length)
            } while (randomIndex === currentIndex)
            setCurrentIndex(randomIndex)
        } else {
            setCurrentIndex((prev) => (prev + 1) % playlist.length)
        }
    }

    const playPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    }

    useEffect(() => {
        if (playerRef.current && playlist[currentIndex]) {
            loadAndPlayVideo(currentIndex)
        }
    }, [currentIndex])


    // Load YouTube API
    useEffect(() => {
        // Create YouTube script tag
        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        const firstScriptTag = document.getElementsByTagName("script")[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        // Initialize player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("youtube-player", {
                height: "0",
                width: "0",
                videoId: playlist[0].id,
                playerVars: {
                    autoplay: 1, // Enable autoplay
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    rel: 0,
                },
                events: {
                    onReady: (event) => {
                        // Set initial volume and unmute
                        event.target.setVolume(volume)
                        event.target.unMute()
                        setIsMuted(false)
                        // Attempt to play
                        event.target.playVideo()
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            if (isRepeating) {
                                playerRef.current?.seekTo(0)
                                playerRef.current?.playVideo()
                            } else {
                                playNext()
                            }
                        } else if (event.data === window.YT.PlayerState.PLAYING) {
                            setIsPlaying(true)
                        } else if (event.data === window.YT.PlayerState.PAUSED) {
                            setIsPlaying(false)
                        }
                    },
                    onError: (event) => {
                        console.error("YouTube Player Error:", event.data)
                    },
                },
            })
        }

        // Cleanup
        return () => {
            window.onYouTubeIframeAPIReady = null
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }
    }, [])

    // Handle volume change
    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.setVolume(volume)
            if (volume === 0) {
                playerRef.current.mute()
                setIsMuted(true)
            } else {
                playerRef.current.unMute()
                setIsMuted(false)
            }
        }
    }, [volume])

    // Toggle play/pause
    const togglePlay = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo()
                setIsPlaying(false)
            } else {
                playerRef.current.playVideo()
                setIsPlaying(true)
            }
        }
    }

    // Toggle mute
    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute()
                playerRef.current.setVolume(volume)
                setIsMuted(false)
            } else {
                playerRef.current.mute()
                setIsMuted(true)
            }
        }
    }

    // Handle volume slider change
    const handleVolumeChange = (value: number[]) => {
        const newVolume = value[0]
        setVolume(newVolume)
    }

    // Toggle minimize
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized)
    }

    return (
        <>
            {/* Hidden YouTube player */}
            <div
                id="youtube-player"
                style={{
                    position: "absolute",
                    width: 0,
                    height: 0,
                    opacity: 0,
                    pointerEvents: "none",
                }}
            ></div>

            {/* Music player UI */}
            <div
                ref={containerRef}
                className={`fixed z-50 transition-all duration-300 ease-in-out ${isMinimized
                    ? "bottom-6 left-6 w-12 h-12 rounded-full"
                    : "bottom-6 left-6  h-auto sm:h-16 rounded-lg"
                    }`}

            >
                {isMinimized ? (
                    <>
                        {isMinimized && !isPlaying && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-full h-full rounded-full text-white hover:bg-zinc-800/50"
                                onClick={toggleMinimize}
                            >
                                <Music className="h-5 w-5" />
                            </Button>
                        )}
                        {isMinimized && isPlaying && (
                            <div
                                className="fixed bottom-4 left-6 w-20 h-20 z-50 cursor-pointer"
                                onClick={toggleMinimize}
                            >
                                <div className={`vinyl-disc ${isPlaying ? "spinning" : ""}`}>
                                    <div className="vinyl-outer">
                                        <div className="vinyl-inner">
                                            <div className="vinyl-label">
                                                <div className="vinyl-note">♫</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 h-full gap-2">
                        <div className="flex items-center gap-3">
                            <Button onClick={playPrevious} variant="ghost" size="icon" className="text-white hover:text-yellow-500">
                                <SkipBack size={16} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10 rounded-full bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-400"
                                onClick={togglePlay}
                            >
                                {isPlaying ? (
                                    <span className="h-3 w-3 bg-yellow-500 rounded-sm"></span>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path d="M8 5.14v14l11-7-11-7z" />
                                    </svg>
                                )}
                            </Button>
                            <Button onClick={playNext} variant="ghost" size="icon" className="text-white hover:text-yellow-500">
                                <SkipForward size={16} />
                            </Button>
                            <div className="flex flex-col max-md:hidden">
                                <span className="text-xs font-medium text-white truncate max-w-[120px]">
                                    {playlist[currentIndex].title}

                                </span>
                                <span className="text-xs text-zinc-400">SN Music</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button onClick={() => setIsShuffling(!isShuffling)} variant="ghost" size="icon" className={isShuffling ? "text-yellow-400" : "text-zinc-400"}>
                                <Shuffle size={16} />
                            </Button>
                            <Button onClick={() => setIsRepeating(!isRepeating)} variant="ghost" size="icon" className={isRepeating ? "text-yellow-400" : "text-zinc-400"}>
                                <Repeat size={16} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                                onClick={toggleMute}
                            >
                                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </Button>

                            <div className="hidden sm:block w-20">
                                <Slider
                                    value={[volume]}
                                    min={0}
                                    max={100}
                                    step={1}
                                    onValueChange={handleVolumeChange}
                                    className="h-1.5"
                                />
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                                onClick={toggleMinimize}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                                    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                                    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                                    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

