import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeartOutline.svg';

export function HeartOutline(props: TProps) {
  return (
    <Icon {...props} name="HeartOutline">
      <SVG />
    </Icon>
  );
}
