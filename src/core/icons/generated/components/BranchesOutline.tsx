import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BranchesOutline.svg';

export function BranchesOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BranchesOutline">
      <SVG />
    </Icon>
  );
}
