import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EquatorialGuinea.svg';

export function EquatorialGuinea(props: TBaseProps) {
  return (
    <Icon {...props} name="EquatorialGuinea">
      <SVG />
    </Icon>
  );
}
