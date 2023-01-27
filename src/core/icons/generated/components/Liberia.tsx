import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Liberia.svg';

export function Liberia(props: TBaseProps) {
  return (
    <Icon {...props} name="Liberia">
      <SVG />
    </Icon>
  );
}
