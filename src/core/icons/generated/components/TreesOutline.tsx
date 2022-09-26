import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreesOutline.svg';

export function TreesOutline(props: TProps) {
  return (
    <Icon {...props} name="TreesOutline">
      <SVG />
    </Icon>
  );
}
