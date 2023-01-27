import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EmailReadSolid.svg';

export function EmailReadSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="EmailReadSolid">
      <SVG />
    </Icon>
  );
}
