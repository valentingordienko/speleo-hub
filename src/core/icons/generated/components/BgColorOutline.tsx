import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BgColorOutline.svg';

export function BgColorOutline(props: TProps) {
  return (
    <Icon {...props} name="BgColorOutline">
      <SVG />
    </Icon>
  );
}
