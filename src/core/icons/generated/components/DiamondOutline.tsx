import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DiamondOutline.svg';

export function DiamondOutline(props: TProps) {
  return (
    <Icon {...props} name="DiamondOutline">
      <SVG />
    </Icon>
  );
}
