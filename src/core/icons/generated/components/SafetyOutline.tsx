import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SafetyOutline.svg';

export function SafetyOutline(props: TProps) {
  return (
    <Icon {...props} name="SafetyOutline">
      <SVG />
    </Icon>
  );
}
