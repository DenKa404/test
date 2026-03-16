"use client"

import { useState } from "react"
import { Star } from "lucide-react"

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(false)

  return (
    <div
	className="size-fit items-center cursor-pointer"
      onClick={() => setFavorite(!favorite)}
    >
      {favorite ? <Star className="fill-chart-1"/> : <Star/>}
    </div>
  )
}
