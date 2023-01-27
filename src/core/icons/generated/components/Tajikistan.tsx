import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tajikistan.svg';

export function Tajikistan(props: TBaseProps) {
  return (
    <Icon {...props} name="Tajikistan">
      <SVG />
    </Icon>
  );
}
