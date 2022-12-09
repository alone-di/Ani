import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V4H28V0H0ZM0 8V12H28V8H0ZM0 16V20H28V16H0Z' fill='black' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
