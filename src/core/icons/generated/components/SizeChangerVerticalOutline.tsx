import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SizeChangerVerticalOutline.svg';

export function SizeChangerVerticalOutline(props: TProps) {
  return (
    <Icon {...props} name="SizeChangerVerticalOutline">
      <SVG />
    </Icon>
  );
}
