import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CutOutline.svg';

export function CutOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CutOutline">
      <SVG />
    </Icon>
  );
}
