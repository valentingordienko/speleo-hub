import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GobackOutline.svg';

export function GobackOutline(props: TProps) {
  return (
    <Icon {...props} name="GobackOutline">
      <SVG />
    </Icon>
  );
}
