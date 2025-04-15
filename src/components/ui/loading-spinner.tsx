import { cn } from '@/lib/utils';

type LoadingSpinnerProps = {
  className?: string;
  full?: boolean;
  size?: string;
};

export const LoadingSpinner = ({
  className,
  full = false,
  size = '24',
}: LoadingSpinnerProps) => {
  const fullscreen = full ? 'h-[85svh]' : 'h-full';

  return (
    <div className={cn('flex justify-center items-center', fullscreen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('animate-spin', className)}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};
