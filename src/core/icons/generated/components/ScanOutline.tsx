import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ScanOutline.svg';

export function ScanOutline(props: TProps) {
  return (
    <Icon {...props} name="ScanOutline">
      <SVG />
    </Icon>
  );
}
