import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocExportSolid.svg';

export function DocExportSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocExportSolid">
      <SVG />
    </Icon>
  );
}
