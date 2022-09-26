import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Liberia.svg';

export function Liberia(props: TProps) {
  return (
    <Icon {...props} name="Liberia">
      <SVG />
    </Icon>
  );
}
