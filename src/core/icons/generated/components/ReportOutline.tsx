import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ReportOutline.svg';

export function ReportOutline(props: TProps) {
  return (
    <Icon {...props} name="ReportOutline">
      <SVG />
    </Icon>
  );
}
