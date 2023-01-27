import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Dominica.svg';

export function Dominica(props: TBaseProps) {
  return (
    <Icon {...props} name="Dominica">
      <SVG />
    </Icon>
  );
}
