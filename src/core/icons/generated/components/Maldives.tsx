import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Maldives.svg';

export function Maldives(props: TBaseProps) {
  return (
    <Icon {...props} name="Maldives">
      <SVG />
    </Icon>
  );
}
