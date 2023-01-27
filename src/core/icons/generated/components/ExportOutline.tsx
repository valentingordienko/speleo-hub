import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExportOutline.svg';

export function ExportOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ExportOutline">
      <SVG />
    </Icon>
  );
}
