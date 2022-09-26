import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mozambique.svg';

export function Mozambique(props: TProps) {
  return (
    <Icon {...props} name="Mozambique">
      <SVG />
    </Icon>
  );
}
