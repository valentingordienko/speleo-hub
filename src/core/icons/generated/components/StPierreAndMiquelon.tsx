import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StPierreAndMiquelon.svg';

export function StPierreAndMiquelon(props: TProps) {
  return (
    <Icon {...props} name="StPierreAndMiquelon">
      <SVG />
    </Icon>
  );
}
