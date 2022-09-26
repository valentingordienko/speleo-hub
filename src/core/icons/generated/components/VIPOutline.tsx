import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VIPOutline.svg';

export function VIPOutline(props: TProps) {
  return (
    <Icon {...props} name="VIPOutline">
      <SVG />
    </Icon>
  );
}
