import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Uruguay.svg';

export function Uruguay(props: TProps) {
  return (
    <Icon {...props} name="Uruguay">
      <SVG />
    </Icon>
  );
}
