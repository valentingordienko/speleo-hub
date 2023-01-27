import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DebitCardSolid.svg';

export function DebitCardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DebitCardSolid">
      <SVG />
    </Icon>
  );
}
