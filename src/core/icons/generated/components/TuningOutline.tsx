import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TuningOutline.svg';

export function TuningOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TuningOutline">
      <SVG />
    </Icon>
  );
}
