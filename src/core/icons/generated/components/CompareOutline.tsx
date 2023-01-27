import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CompareOutline.svg';

export function CompareOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CompareOutline">
      <SVG />
    </Icon>
  );
}
