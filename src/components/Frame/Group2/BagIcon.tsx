import { memo, SVGProps } from 'react';

const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_457_171)'>
      <path
        d='M11.5556 8.19556C11.5556 7.01682 12.0238 5.88635 12.8573 5.05286C13.6908 4.21936 14.8213 3.75111 16 3.75111C17.1787 3.75111 18.3092 4.21936 19.1427 5.05286C19.9762 5.88635 20.4444 7.01682 20.4444 8.19556V10.6667H22.2222V8.19556C22.2222 7.37844 22.0613 6.56933 21.7486 5.81441C21.4359 5.0595 20.9776 4.37357 20.3998 3.79578C19.822 3.21799 19.1361 2.75967 18.3811 2.44697C17.6262 2.13428 16.8171 1.97333 16 1.97333C15.1829 1.97333 14.3738 2.13428 13.6189 2.44697C12.8639 2.75967 12.178 3.21799 11.6002 3.79578C11.0224 4.37357 10.5641 5.0595 10.2514 5.81441C9.93872 6.56933 9.77778 7.37844 9.77778 8.19556V10.6667H11.5556V8.19556Z'
        fill='black'
      />
      <path
        d='M22.2222 10.6667V13.4222C22.2222 13.658 22.1286 13.8841 21.9619 14.0508C21.7952 14.2175 21.5691 14.3111 21.3333 14.3111C21.0976 14.3111 20.8715 14.2175 20.7048 14.0508C20.5381 13.8841 20.4444 13.658 20.4444 13.4222V10.6667H11.5556V13.4222C11.5556 13.658 11.4619 13.8841 11.2952 14.0508C11.1285 14.2175 10.9024 14.3111 10.6667 14.3111C10.4309 14.3111 10.2048 14.2175 10.0381 14.0508C9.87143 13.8841 9.77778 13.658 9.77778 13.4222V10.6667H3.55556V28.4444C3.55556 28.9159 3.74286 29.3681 4.07625 29.7015C4.40965 30.0349 4.86184 30.2222 5.33333 30.2222H26.6667C27.1382 30.2222 27.5903 30.0349 27.9237 29.7015C28.2571 29.3681 28.4444 28.9159 28.4444 28.4444V10.6667H22.2222Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_457_171'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(BagIcon);
export { Memo as BagIcon };
