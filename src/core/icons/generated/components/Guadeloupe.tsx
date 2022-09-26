import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guadeloupe.svg';

export function Guadeloupe(props: TProps) {
  return (
    <Icon {...props} name="Guadeloupe">
      <SVG />
    </Icon>
  );
}
