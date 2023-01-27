import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Jamaica.svg';

export function Jamaica(props: TBaseProps) {
  return (
    <Icon {...props} name="Jamaica">
      <SVG />
    </Icon>
  );
}
