import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChairOutline.svg';

export function ChairOutline(props: TProps) {
  return (
    <Icon {...props} name="ChairOutline">
      <SVG />
    </Icon>
  );
}
