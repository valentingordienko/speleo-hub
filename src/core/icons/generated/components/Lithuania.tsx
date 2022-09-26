import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Lithuania.svg';

export function Lithuania(props: TProps) {
  return (
    <Icon {...props} name="Lithuania">
      <SVG />
    </Icon>
  );
}
