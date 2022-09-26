import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tajikistan.svg';

export function Tajikistan(props: TProps) {
  return (
    <Icon {...props} name="Tajikistan">
      <SVG />
    </Icon>
  );
}
