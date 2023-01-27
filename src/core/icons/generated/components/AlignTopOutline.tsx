import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignTopOutline.svg';

export function AlignTopOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AlignTopOutline">
      <SVG />
    </Icon>
  );
}
