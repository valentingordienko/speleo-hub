import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GreatBritain.svg';

export function GreatBritain(props: TBaseProps) {
  return (
    <Icon {...props} name="GreatBritain">
      <SVG />
    </Icon>
  );
}
