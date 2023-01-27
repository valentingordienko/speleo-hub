import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AtOutline.svg';

export function AtOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AtOutline">
      <SVG />
    </Icon>
  );
}
