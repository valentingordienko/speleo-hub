import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ProcessOutline.svg';

export function ProcessOutline(props: TProps) {
  return (
    <Icon {...props} name="ProcessOutline">
      <SVG />
    </Icon>
  );
}
