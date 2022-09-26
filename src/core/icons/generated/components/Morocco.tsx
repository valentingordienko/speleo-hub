import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Morocco.svg';

export function Morocco(props: TProps) {
  return (
    <Icon {...props} name="Morocco">
      <SVG />
    </Icon>
  );
}
