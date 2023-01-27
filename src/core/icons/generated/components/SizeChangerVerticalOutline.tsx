import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SizeChangerVerticalOutline.svg';

export function SizeChangerVerticalOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SizeChangerVerticalOutline">
      <SVG />
    </Icon>
  );
}
