import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Dominica.svg';

export function Dominica(props: TProps) {
  return (
    <Icon {...props} name="Dominica">
      <SVG />
    </Icon>
  );
}
