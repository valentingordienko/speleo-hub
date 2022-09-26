import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ReportSolid.svg';

export function ReportSolid(props: TProps) {
  return (
    <Icon {...props} name="ReportSolid">
      <SVG />
    </Icon>
  );
}
