import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ReportOutline.svg';

export function ReportOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ReportOutline">
      <SVG />
    </Icon>
  );
}
