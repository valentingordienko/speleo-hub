import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AtOutline.svg';

export function AtOutline(props: TProps) {
  return (
    <Icon {...props} name="AtOutline">
      <SVG />
    </Icon>
  );
}
