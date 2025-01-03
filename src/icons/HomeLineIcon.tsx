import React from 'react';

import type { IIconProps } from './types';

const HomeLineIcon = React.forwardRef<SVGSVGElement, IIconProps>(
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
          d="M6.625 19H9.97125V13.0577H15.2788V19H18.625V9.99999L12.625 5.48074L6.625 9.99999V19ZM5.125 20.5V9.24999L12.625 3.60574L20.125 9.24999V20.5H13.7788V14.5577H11.4713V20.5H5.125Z"
          fill={color}
        />
      </svg>
    );
  },
);

HomeLineIcon.displayName = 'Home Line Icon';

export default HomeLineIcon;
