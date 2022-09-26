import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocExportOutline.svg';

export function DocExportOutline(props: TProps) {
  return (
    <Icon {...props} name="DocExportOutline">
      <SVG />
    </Icon>
  );
}
