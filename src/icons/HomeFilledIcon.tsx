import React from 'react';

import type { IIconProps } from './types';

const HomeFilledIcon = React.forwardRef<SVGSVGElement, IIconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.125 20.5V9.24999L12.625 3.60574L20.125 9.24999V20.5H14.5288V13.8077H10.7213V20.5H5.125Z"
          fill={color}
        />
      </svg>
    );
  },
);

HomeFilledIcon.displayName = 'Home Filled Icon';

export default HomeFilledIcon;
