import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EquatorialGuinea.svg';

export function EquatorialGuinea(props: TProps) {
  return (
    <Icon {...props} name="EquatorialGuinea">
      <SVG />
    </Icon>
  );
}
