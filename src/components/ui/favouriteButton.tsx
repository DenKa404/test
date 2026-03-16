"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(false)

  return (
    <Button
      variant={favorite ? "default" : "outline"}
      onClick={() => setFavorite(!favorite)}
    >
      {favorite ? "★ Favorite" : "☆ Add"}
    </Button>
  )
}
