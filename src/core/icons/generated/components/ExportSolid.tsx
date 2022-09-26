import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExportSolid.svg';

export function ExportSolid(props: TProps) {
  return (
    <Icon {...props} name="ExportSolid">
      <SVG />
    </Icon>
  );
}
