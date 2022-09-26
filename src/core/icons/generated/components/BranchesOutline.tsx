import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BranchesOutline.svg';

export function BranchesOutline(props: TProps) {
  return (
    <Icon {...props} name="BranchesOutline">
      <SVG />
    </Icon>
  );
}
