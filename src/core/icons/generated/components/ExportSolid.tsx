import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExportSolid.svg';

export function ExportSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ExportSolid">
      <SVG />
    </Icon>
  );
}
