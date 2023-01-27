import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Togo.svg';

export function Togo(props: TBaseProps) {
  return (
    <Icon {...props} name="Togo">
      <SVG />
    </Icon>
  );
}
