import './spinner.styles.scss';

export type SpinnerProps = {
  size?: string;
  variant?: string;
  className?: string;
};

export const Spinner = ({
  size = 'md',
  variant = 'primary',
  className,
}: SpinnerProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={['spinner', className].join(' ')}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <span className="sr-only">Loading</span>
    </>
  );
};
