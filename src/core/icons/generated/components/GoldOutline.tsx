import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GoldOutline.svg';

export function GoldOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GoldOutline">
      <SVG />
    </Icon>
  );
}
