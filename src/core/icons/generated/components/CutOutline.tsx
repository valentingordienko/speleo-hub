import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CutOutline.svg';

export function CutOutline(props: TProps) {
  return (
    <Icon {...props} name="CutOutline">
      <SVG />
    </Icon>
  );
}
