import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Georgia.svg';

export function Georgia(props: TProps) {
  return (
    <Icon {...props} name="Georgia">
      <SVG />
    </Icon>
  );
}
