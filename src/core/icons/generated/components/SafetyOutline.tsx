import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SafetyOutline.svg';

export function SafetyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SafetyOutline">
      <SVG />
    </Icon>
  );
}
