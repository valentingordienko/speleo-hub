import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HongKong.svg';

export function HongKong(props: TProps) {
  return (
    <Icon {...props} name="HongKong">
      <SVG />
    </Icon>
  );
}
