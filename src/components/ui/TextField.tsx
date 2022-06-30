import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined
}

const TextField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type="text"
          {...props}
          className="w-full rounded-md border border-gray px-4 py-1 focus-visible:outline-primary"
        />
        {error && <p className="text-xs text-red-700">{error}</p>}
      </div>
    )
  }
)

TextField.displayName = "TextField"

export default TextField
