import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileSNGSolid.svg';

export function FileSNGSolid(props: TProps) {
  return (
    <Icon {...props} name="FileSNGSolid">
      <SVG />
    </Icon>
  );
}
