import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlusSolid.svg';

export function PlusSolid(props: TProps) {
  return (
    <Icon {...props} name="PlusSolid">
      <SVG />
    </Icon>
  );
}
