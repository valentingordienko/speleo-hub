import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Maldives.svg';

export function Maldives(props: TProps) {
  return (
    <Icon {...props} name="Maldives">
      <SVG />
    </Icon>
  );
}
