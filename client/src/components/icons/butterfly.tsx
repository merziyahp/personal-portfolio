interface ButterflyIconProps {
  className?: string;
}

export function ButterflyIcon({ className = "w-6 h-6" }: ButterflyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C11.5 2 11 2.19 10.59 2.59L10 3.17L9.41 2.59C9 2.19 8.5 2 8 2C6.34 2 5 3.34 5 5C5 6.66 6.34 8 8 8C8.5 8 9 7.81 9.41 7.41L10 6.83L10.59 7.41C11 7.81 11.5 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2Z" />
      <path d="M8 10C6.34 10 5 11.34 5 13C5 14.66 6.34 16 8 16C8.5 16 9 15.81 9.41 15.41L10 14.83L10.59 15.41C11 15.81 11.5 16 12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10C11.5 10 11 10.19 10.59 10.59L10 11.17L9.41 10.59C9 10.19 8.5 10 8 10Z" />
      <path d="M10 12C10 11.45 10.45 11 11 11H13C13.55 11 14 11.45 14 12C14 12.55 13.55 13 13 13H11C10.45 13 10 12.55 10 12Z" />
    </svg>
  );
}
