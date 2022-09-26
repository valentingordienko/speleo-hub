import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurnOutline.svg';

export function BurnOutline(props: TProps) {
  return (
    <Icon {...props} name="BurnOutline">
      <SVG />
    </Icon>
  );
}