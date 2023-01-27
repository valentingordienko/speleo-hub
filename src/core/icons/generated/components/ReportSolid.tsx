import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ReportSolid.svg';

export function ReportSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ReportSolid">
      <SVG />
    </Icon>
  );
}
