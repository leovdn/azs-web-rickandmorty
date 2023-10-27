interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search by episode name"
      value={value}
      onChange={handleInputChange}
    />
  )
}
