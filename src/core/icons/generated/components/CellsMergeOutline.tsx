import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CellsMergeOutline.svg';

export function CellsMergeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CellsMergeOutline">
      <SVG />
    </Icon>
  );
}
