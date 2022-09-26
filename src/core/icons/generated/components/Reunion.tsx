import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Reunion.svg';

export function Reunion(props: TProps) {
  return (
    <Icon {...props} name="Reunion">
      <SVG />
    </Icon>
  );
}
