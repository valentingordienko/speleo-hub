import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreesSolid.svg';

export function TreesSolid(props: TProps) {
  return (
    <Icon {...props} name="TreesSolid">
      <SVG />
    </Icon>
  );
}
