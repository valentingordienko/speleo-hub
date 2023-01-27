import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Uruguay.svg';

export function Uruguay(props: TBaseProps) {
  return (
    <Icon {...props} name="Uruguay">
      <SVG />
    </Icon>
  );
}
