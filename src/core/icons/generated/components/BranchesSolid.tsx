import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BranchesSolid.svg';

export function BranchesSolid(props: TProps) {
  return (
    <Icon {...props} name="BranchesSolid">
      <SVG />
    </Icon>
  );
}
