import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChairOutline.svg';

export function ChairOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChairOutline">
      <SVG />
    </Icon>
  );
}
