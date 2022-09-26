import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CellsMergeOutline.svg';

export function CellsMergeOutline(props: TProps) {
  return (
    <Icon {...props} name="CellsMergeOutline">
      <SVG />
    </Icon>
  );
}
