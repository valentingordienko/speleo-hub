import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocExportOutline.svg';

export function DocExportOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocExportOutline">
      <SVG />
    </Icon>
  );
}
