import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guadeloupe.svg';

export function Guadeloupe(props: TBaseProps) {
  return (
    <Icon {...props} name="Guadeloupe">
      <SVG />
    </Icon>
  );
}
