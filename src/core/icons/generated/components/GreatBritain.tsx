import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GreatBritain.svg';

export function GreatBritain(props: TProps) {
  return (
    <Icon {...props} name="GreatBritain">
      <SVG />
    </Icon>
  );
}
