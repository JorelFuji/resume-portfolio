import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Senior Pattern: Using CVA for type-safe variants.
 * This handles the "elevated" and "subtle" tones used in your Sidebar and Resume.
 */
const cardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      tone: {
        default: "border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm",
        elevated: "border-[var(--color-border)] bg-[var(--color-surface)] shadow-md hover:shadow-lg hover:-translate-y-1",
        subtle: "border-transparent bg-zinc-50/50 dark:bg-zinc-900/50",
        ghost: "border-transparent bg-transparent",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      }
    },
    defaultVariants: {
      tone: "default",
      padding: "md",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, tone, padding, header, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ tone, padding }), className)}
        {...props}
      >
        {header && (
          <div className="mb-4 border-b border-[var(--color-border)] pb-4 px-1">
            {header}
          </div>
        )}
        
        <div className="relative">
          {children}
        </div>

        {footer && (
          <div className="mt-4 border-t border-[var(--color-border)] pt-4 px-1">
            {footer}
          </div>
        )}
      </div>
    )
  }
)
Card.displayName = "Card"

// Helper sub-components for complex layouts (like your ResumePage)
const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

/**
 * Unified Module Pattern: Providing both named and default exports 
 * to fix TS2307 and TS2613 errors across the project.
 */
export { Card, CardHeader, CardContent, cardVariants }
export default Card