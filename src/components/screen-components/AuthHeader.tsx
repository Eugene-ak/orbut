import { AuthHeaderProps } from "../../types/headers";

export default function AuthHeader({ customHeaderStyles, children }: AuthHeaderProps) {
  return (
    <header className={customHeaderStyles}>
      {children}
    </header>
  )
}
