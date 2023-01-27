import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Reunion.svg';

export function Reunion(props: TBaseProps) {
  return (
    <Icon {...props} name="Reunion">
      <SVG />
    </Icon>
  );
}
