import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DebitCardSolid.svg';

export function DebitCardSolid(props: TProps) {
  return (
    <Icon {...props} name="DebitCardSolid">
      <SVG />
    </Icon>
  );
}
