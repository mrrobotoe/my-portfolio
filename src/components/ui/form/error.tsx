import './error.styles.scss';

export type ErrorProps = {
  errorMessage?: string | null;
};

export const Error = ({ errorMessage }: ErrorProps) => {
  if (!errorMessage) return null;

  return (
    <div role="alert" aria-label={errorMessage} className="error_message">
      {errorMessage}
    </div>
  );
};
