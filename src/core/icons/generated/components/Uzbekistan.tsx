import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Uzbekistan.svg';

export function Uzbekistan(props: TBaseProps) {
  return (
    <Icon {...props} name="Uzbekistan">
      <SVG />
    </Icon>
  );
}
