import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowSmallDownOutline.svg';

export function ArrowSmallDownOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowSmallDownOutline">
      <SVG />
    </Icon>
  );
}
