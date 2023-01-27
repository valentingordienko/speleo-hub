import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChipOutline.svg';

export function ChipOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChipOutline">
      <SVG />
    </Icon>
  );
}
