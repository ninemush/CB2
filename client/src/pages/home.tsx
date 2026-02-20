function CannonBallIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="17" cy="20" r="12" fill="currentColor" />
      <circle cx="17" cy="20" r="12" fill="currentColor" opacity="0.15" />
      <ellipse cx="13" cy="16" rx="3.5" ry="2.5" fill="white" opacity="0.08" />
      <path d="M25 12 C27 9, 30 7, 32 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M31 4 C32.5 3.5, 34 4.5, 33.5 6" stroke="#e8450a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="33" cy="3.5" r="1.2" fill="#e8450a" opacity="0.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full gap-4"
      data-testid="page-home"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border">
        <CannonBallIcon className="h-8 w-8 text-foreground" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-lg font-semibold text-foreground">
          CannonBall is loading...
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm">
          Your automation pipeline workspace is getting ready. Features are on the way.
        </p>
      </div>
    </div>
  );
}
