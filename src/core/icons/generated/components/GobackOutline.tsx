import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GobackOutline.svg';

export function GobackOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GobackOutline">
      <SVG />
    </Icon>
  );
}
