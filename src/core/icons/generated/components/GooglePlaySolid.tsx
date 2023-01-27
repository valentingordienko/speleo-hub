import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GooglePlaySolid.svg';

export function GooglePlaySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GooglePlaySolid">
      <SVG />
    </Icon>
  );
}
