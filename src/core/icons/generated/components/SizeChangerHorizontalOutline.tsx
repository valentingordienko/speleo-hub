import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SizeChangerHorizontalOutline.svg';

export function SizeChangerHorizontalOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SizeChangerHorizontalOutline">
      <SVG />
    </Icon>
  );
}
