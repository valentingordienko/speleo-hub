import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Grenada.svg';

export function Grenada(props: TBaseProps) {
  return (
    <Icon {...props} name="Grenada">
      <SVG />
    </Icon>
  );
}
