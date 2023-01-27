import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileSNGSolid.svg';

export function FileSNGSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FileSNGSolid">
      <SVG />
    </Icon>
  );
}
