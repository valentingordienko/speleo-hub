import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowSmallDownOutline.svg';

export function ArrowSmallDownOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowSmallDownOutline">
      <SVG />
    </Icon>
  );
}
