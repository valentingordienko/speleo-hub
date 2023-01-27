import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BranchesSolid.svg';

export function BranchesSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BranchesSolid">
      <SVG />
    </Icon>
  );
}
