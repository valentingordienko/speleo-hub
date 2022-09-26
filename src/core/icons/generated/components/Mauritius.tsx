import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mauritius.svg';

export function Mauritius(props: TProps) {
  return (
    <Icon {...props} name="Mauritius">
      <SVG />
    </Icon>
  );
}
