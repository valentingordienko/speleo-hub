import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Jamaica.svg';

export function Jamaica(props: TProps) {
  return (
    <Icon {...props} name="Jamaica">
      <SVG />
    </Icon>
  );
}
