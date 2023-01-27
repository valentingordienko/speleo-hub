import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ScanSolid.svg';

export function ScanSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ScanSolid">
      <SVG />
    </Icon>
  );
}
