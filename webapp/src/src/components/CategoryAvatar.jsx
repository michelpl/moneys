import { Avatar, Tooltip } from '@mui/material'
import React from 'react'

export default function CategoryAvatar({ id, image, title }) {
  return (
    <Tooltip arrow key={id} title={title} ><Avatar alt={title} src={'../logos/' + image} sx={{ backgroundColor: '#fff' }} /></Tooltip>
  )
}
