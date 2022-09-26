import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Grenada.svg';

export function Grenada(props: TProps) {
  return (
    <Icon {...props} name="Grenada">
      <SVG />
    </Icon>
  );
}
