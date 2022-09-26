import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignTopOutline.svg';

export function AlignTopOutline(props: TProps) {
  return (
    <Icon {...props} name="AlignTopOutline">
      <SVG />
    </Icon>
  );
}
