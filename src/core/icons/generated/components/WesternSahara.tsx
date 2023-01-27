import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WesternSahara.svg';

export function WesternSahara(props: TBaseProps) {
  return (
    <Icon {...props} name="WesternSahara">
      <SVG />
    </Icon>
  );
}
