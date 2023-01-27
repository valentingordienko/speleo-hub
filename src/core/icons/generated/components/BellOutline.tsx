import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BellOutline.svg';

export function BellOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BellOutline">
      <SVG />
    </Icon>
  );
}
