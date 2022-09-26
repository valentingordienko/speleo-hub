import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SizeChangerHorizontalOutline.svg';

export function SizeChangerHorizontalOutline(props: TProps) {
  return (
    <Icon {...props} name="SizeChangerHorizontalOutline">
      <SVG />
    </Icon>
  );
}
