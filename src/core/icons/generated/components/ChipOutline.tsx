import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChipOutline.svg';

export function ChipOutline(props: TProps) {
  return (
    <Icon {...props} name="ChipOutline">
      <SVG />
    </Icon>
  );
}
