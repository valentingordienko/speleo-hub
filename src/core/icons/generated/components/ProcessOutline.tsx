import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ProcessOutline.svg';

export function ProcessOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ProcessOutline">
      <SVG />
    </Icon>
  );
}
