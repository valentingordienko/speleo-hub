import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StPierreAndMiquelon.svg';

export function StPierreAndMiquelon(props: TBaseProps) {
  return (
    <Icon {...props} name="StPierreAndMiquelon">
      <SVG />
    </Icon>
  );
}
