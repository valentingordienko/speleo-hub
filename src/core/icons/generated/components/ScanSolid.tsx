import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ScanSolid.svg';

export function ScanSolid(props: TProps) {
  return (
    <Icon {...props} name="ScanSolid">
      <SVG />
    </Icon>
  );
}
