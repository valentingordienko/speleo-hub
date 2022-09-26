import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GooglePlaySolid.svg';

export function GooglePlaySolid(props: TProps) {
  return (
    <Icon {...props} name="GooglePlaySolid">
      <SVG />
    </Icon>
  );
}
