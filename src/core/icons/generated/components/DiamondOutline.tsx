import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DiamondOutline.svg';

export function DiamondOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DiamondOutline">
      <SVG />
    </Icon>
  );
}
