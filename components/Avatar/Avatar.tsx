import styles from "./Avatar.module.css"

interface AvatarProps {
  name: string
}

// Returns the display initials for a name.
// PascalCase names (first letter uppercase + at least one more uppercase) get the first two uppercase letters.
// All other names get just the first letter, uppercased.
function getInitials(name: string): string {
  const upperLetters = name.match(/[A-Z]/g) || []
  if (name[0] === name[0]?.toUpperCase() && name[0] !== name[0]?.toLowerCase() && upperLetters.length >= 2) {
    // PascalCase: extract first two uppercase letters
    return upperLetters.slice(0, 2).join("")
  }
  return name[0]?.toUpperCase() ?? ""
}

export default function Avatar({ name }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      {getInitials(name)}
    </div>
  )
}
