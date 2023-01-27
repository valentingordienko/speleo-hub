import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlusSolid.svg';

export function PlusSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PlusSolid">
      <SVG />
    </Icon>
  );
}
