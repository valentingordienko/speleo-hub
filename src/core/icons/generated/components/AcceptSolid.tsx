import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcceptSolid.svg';

export function AcceptSolid(props: TProps) {
  return (
    <Icon {...props} name="AcceptSolid">
      <SVG />
    </Icon>
  );
}
