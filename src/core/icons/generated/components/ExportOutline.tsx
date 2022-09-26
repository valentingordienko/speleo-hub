import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExportOutline.svg';

export function ExportOutline(props: TProps) {
  return (
    <Icon {...props} name="ExportOutline">
      <SVG />
    </Icon>
  );
}
