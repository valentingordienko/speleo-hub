import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SouthAfrica.svg';

export function SouthAfrica(props: TProps) {
  return (
    <Icon {...props} name="SouthAfrica">
      <SVG />
    </Icon>
  );
}
