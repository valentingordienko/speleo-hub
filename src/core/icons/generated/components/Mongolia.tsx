import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mongolia.svg';

export function Mongolia(props: TProps) {
  return (
    <Icon {...props} name="Mongolia">
      <SVG />
    </Icon>
  );
}
