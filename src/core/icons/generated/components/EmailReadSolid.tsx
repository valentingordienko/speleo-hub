import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EmailReadSolid.svg';

export function EmailReadSolid(props: TProps) {
  return (
    <Icon {...props} name="EmailReadSolid">
      <SVG />
    </Icon>
  );
}
