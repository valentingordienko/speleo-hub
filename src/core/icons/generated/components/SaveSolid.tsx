import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaveSolid.svg';

export function SaveSolid(props: TProps) {
  return (
    <Icon {...props} name="SaveSolid">
      <SVG />
    </Icon>
  );
}
