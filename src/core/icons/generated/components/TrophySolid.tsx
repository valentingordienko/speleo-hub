import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrophySolid.svg';

export function TrophySolid(props: TProps) {
  return (
    <Icon {...props} name="TrophySolid">
      <SVG />
    </Icon>
  );
}
