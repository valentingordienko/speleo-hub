import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mauritius.svg';

export function Mauritius(props: TBaseProps) {
  return (
    <Icon {...props} name="Mauritius">
      <SVG />
    </Icon>
  );
}
