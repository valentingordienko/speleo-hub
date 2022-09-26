import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IdeaSolid.svg';

export function IdeaSolid(props: TProps) {
  return (
    <Icon {...props} name="IdeaSolid">
      <SVG />
    </Icon>
  );
}
