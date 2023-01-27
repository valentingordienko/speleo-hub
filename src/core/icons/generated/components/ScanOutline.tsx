import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ScanOutline.svg';

export function ScanOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ScanOutline">
      <SVG />
    </Icon>
  );
}
