import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PowerOutline.svg';

export function PowerOutline(props: TProps) {
  return (
    <Icon {...props} name="PowerOutline">
      <SVG />
    </Icon>
  );
}
