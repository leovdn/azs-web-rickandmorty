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
      onChange={handleInputChange}
      value={value}
      fullWidth
    />
  )
}
