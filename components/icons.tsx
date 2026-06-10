import type { ReactElement, SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="64" height="64" rx="16" fill="#105246" />
      <path
        d="M44 16c0 14.36-7.4 24-21 26 0-7.2 2.1-12.9 6.4-17.1C33.7 20.7 38.6 17.9 44 16Z"
        fill="#92F0BF"
      />
      <path
        d="M20 48c1.6-9.2 6.1-16.4 13.4-21.4"
        stroke="#105246"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="48" r="3.4" fill="#CEF0DE" />
    </svg>
  );
}

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="16" height="16" {...props}>
      <path
        d="M3 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 14" fill="none" width="14" height="14" {...props}>
      <path
        d="M2.5 7.4 5.6 10.5 11.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20" {...props}>
      <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ChevRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20" {...props}>
      <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type IconKey = "LinkedIn" | "X" | "Instagram" | "YouTube" | "Facebook";
export function Social({ name, ...p }: { name: IconKey } & SVGProps<SVGSVGElement>) {
  const paths: Record<IconKey, ReactElement> = {
    LinkedIn: (
      <path
        d="M4.98 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM3.5 8h3v12h-3V8Zm5 0h2.87v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V20h-3v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V20h-3V8Z"
        fill="currentColor"
      />
    ),
    X: <path d="M17.5 3h2.6l-5.7 6.5L21 21h-5.3l-4.1-5.4L6.8 21H4.2l6.1-7L3.4 3h5.4l3.7 4.9L17.5 3Zm-.9 16h1.4L7.5 4.4H6L16.6 19Z" fill="currentColor" />,
    Instagram: (
      <path
        d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.47.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.47 2.43a4.9 4.9 0 0 1-1.15 1.77c-.55.55-1.11.9-1.77 1.15-.63.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.47-2.43.25-.66.6-1.22 1.15-1.77.55-.55 1.11-.9 1.77-1.15.63-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z"
        fill="currentColor"
      />
    ),
    YouTube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" fill="currentColor" />,
    Facebook: <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" fill="currentColor" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden {...p}>
      {paths[name]}
    </svg>
  );
}
