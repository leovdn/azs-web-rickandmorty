import { TextField } from '@mui/material'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <TextField
      label="Search episode"
      focused
      placeholder="Search episode by name..."
      onChange={handleInputChange}
      value={value}
      sx={{
        maxWidth: '500px',
        width: '100%',
        backgroundColor: '#fff',
        fill: '#fff',
      }}
    />
  )
}
