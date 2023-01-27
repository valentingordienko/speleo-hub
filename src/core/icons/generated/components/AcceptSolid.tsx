import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcceptSolid.svg';

export function AcceptSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AcceptSolid">
      <SVG />
    </Icon>
  );
}
