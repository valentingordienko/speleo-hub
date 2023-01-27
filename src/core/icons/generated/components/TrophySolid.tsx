import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrophySolid.svg';

export function TrophySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TrophySolid">
      <SVG />
    </Icon>
  );
}
