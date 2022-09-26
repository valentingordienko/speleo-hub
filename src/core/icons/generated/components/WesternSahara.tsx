import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WesternSahara.svg';

export function WesternSahara(props: TProps) {
  return (
    <Icon {...props} name="WesternSahara">
      <SVG />
    </Icon>
  );
}
