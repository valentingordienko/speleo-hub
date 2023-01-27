import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mauritania.svg';

export function Mauritania(props: TBaseProps) {
  return (
    <Icon {...props} name="Mauritania">
      <SVG />
    </Icon>
  );
}
