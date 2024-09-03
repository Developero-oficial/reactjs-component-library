export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * The size of the button.
   * - 'small' for a compact button.
   * - 'medium' for a standard button.
   * - 'large' for a larger button.
   */
  size?: "small" | "medium" | "large";
}

export function Button({ size = "medium", ...props }: ButtonProps) {
  const sizeClasses = {
    small: "text-xs py-1 px-2",
    medium: "text-sm py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  const sizeClass = sizeClasses[size];

  return (
    <button
      className={`font-bold rounded focus:outline-none focus:shadow-outline ${sizeClass}`}
      {...props}
    />
  );
}
