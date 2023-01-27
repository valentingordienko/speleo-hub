import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurnOutline.svg';

export function BurnOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BurnOutline">
      <SVG />
    </Icon>
  );
}
