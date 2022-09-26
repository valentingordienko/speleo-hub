import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CompareOutline.svg';

export function CompareOutline(props: TProps) {
  return (
    <Icon {...props} name="CompareOutline">
      <SVG />
    </Icon>
  );
}
