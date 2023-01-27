import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeartOutline.svg';

export function HeartOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="HeartOutline">
      <SVG />
    </Icon>
  );
}
