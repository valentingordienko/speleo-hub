import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GoldOutline.svg';

export function GoldOutline(props: TProps) {
  return (
    <Icon {...props} name="GoldOutline">
      <SVG />
    </Icon>
  );
}
