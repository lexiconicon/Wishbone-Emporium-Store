import React from 'react'

function GenreFilter({genres, setSelectedGenre}) {
  return (
    <select className='formSelect' onChange={(e) => setSelectedGenre(e.target.value)}>
      <option value=''>All Genres</option>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
        {genre}
        </option>
      ))}
    </select>
  )
}

export default GenreFilter
