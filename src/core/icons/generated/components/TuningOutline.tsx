import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TuningOutline.svg';

export function TuningOutline(props: TProps) {
  return (
    <Icon {...props} name="TuningOutline">
      <SVG />
    </Icon>
  );
}
