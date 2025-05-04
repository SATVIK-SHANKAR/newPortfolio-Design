"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface SpotifyPlayerProps {
  playlistId: string
}

export function SpotifyPlayer({ playlistId }: SpotifyPlayerProps) {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("0") // Default to light theme
  const [mounted, setMounted] = useState(false)

  // Handle theme changes
  useEffect(() => {
    setMounted(true)
    if (resolvedTheme === "dark") {
      setTheme("1") // Dark theme for Spotify
    } else {
      setTheme("0") // Light theme for Spotify
    }
  }, [resolvedTheme])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return <div className="h-[360px] w-full bg-muted animate-pulse rounded-lg"></div>

  return (
    <div className="border-2 border-theme-500 rounded-lg overflow-hidden" style={{ height: "360px" }}>
      <iframe
        title="Spotify Embed: Recommendation Playlist"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${theme}`}
        width="100%"
        height="100%"
        style={{ minHeight: "360px" }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
