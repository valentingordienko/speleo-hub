import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Georgia.svg';

export function Georgia(props: TBaseProps) {
  return (
    <Icon {...props} name="Georgia">
      <SVG />
    </Icon>
  );
}
