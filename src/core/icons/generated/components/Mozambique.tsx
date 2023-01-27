import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mozambique.svg';

export function Mozambique(props: TBaseProps) {
  return (
    <Icon {...props} name="Mozambique">
      <SVG />
    </Icon>
  );
}
