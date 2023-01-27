import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SouthAfrica.svg';

export function SouthAfrica(props: TBaseProps) {
  return (
    <Icon {...props} name="SouthAfrica">
      <SVG />
    </Icon>
  );
}
