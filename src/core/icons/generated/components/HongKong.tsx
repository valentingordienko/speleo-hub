import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HongKong.svg';

export function HongKong(props: TBaseProps) {
  return (
    <Icon {...props} name="HongKong">
      <SVG />
    </Icon>
  );
}
