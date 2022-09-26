import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BellOutline.svg';

export function BellOutline(props: TProps) {
  return (
    <Icon {...props} name="BellOutline">
      <SVG />
    </Icon>
  );
}
