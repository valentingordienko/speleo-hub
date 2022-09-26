import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Togo.svg';

export function Togo(props: TProps) {
  return (
    <Icon {...props} name="Togo">
      <SVG />
    </Icon>
  );
}
