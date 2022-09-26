import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocExportSolid.svg';

export function DocExportSolid(props: TProps) {
  return (
    <Icon {...props} name="DocExportSolid">
      <SVG />
    </Icon>
  );
}
