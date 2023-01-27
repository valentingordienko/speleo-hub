import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IdeaSolid.svg';

export function IdeaSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="IdeaSolid">
      <SVG />
    </Icon>
  );
}
