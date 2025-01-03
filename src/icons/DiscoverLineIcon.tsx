import React from 'react';

import type { IIconProps } from './types';

const DiscoverLineIcon = React.forwardRef<SVGSVGElement, IIconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          id="Vector"
          d="M6.5 17.5L14 14L17.5 6.5L10 10L6.5 17.5ZM12 13C11.7167 13 11.4792 12.9042 11.2875 12.7125C11.0958 12.5208 11 12.2833 11 12C11 11.7167 11.0958 11.4792 11.2875 11.2875C11.4792 11.0958 11.7167 11 12 11C12.2833 11 12.5208 11.0958 12.7125 11.2875C12.9042 11.4792 13 11.7167 13 12C13 12.2833 12.9042 12.5208 12.7125 12.7125C12.5208 12.9042 12.2833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
          fill={color}
        />
      </svg>
    );
  },
);

DiscoverLineIcon.displayName = 'Discover Line Icon';

export default DiscoverLineIcon;
